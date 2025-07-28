import express from "express";
import mongoose from "mongoose";
import z from "zod";
import {contentModel, linksModel, usersModel} from "./db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
import { JWT_SECRETE, MONGO_DB_URL } from "./config";
import { authMiddleware } from "./middleware";
import { hash } from "./utils";

const app = express();
app.use(express.json());

//routes
//signup
app.post("/api/v1/signup", async function(req, res){
    try{
        //input validation
        const requiredBody = z.strictObject({
            userName: z.string().min(5).max(30),
            userEmail: z.string().email().max(50),
            userPassword: z.string().min(5).max(20)
                      .refine((password) =>/[A-Z]/.test(password), 
                        {message: "Required atleast one uppercase character"})
                      .refine((password) => /[a-z]/.test(password), 
                        {message: "Required atleast one lowercase character"})
                      .refine((password) => /[0-9]/.test(password), 
                        {message: "Required atleast one number"})
                      .refine((password) => /[!@#$%^&*]/.test(password), 
                        {message: "Required atleast one special character"})
        });
        const parsedRequiredBody = requiredBody.safeParse(req.body);
        if(!parsedRequiredBody.success){
            res.status(411).json({
                message:"incorrect Formate",
                error: parsedRequiredBody.error
            })
        }else{
            try{

                const {userName, userEmail,userPassword} = parsedRequiredBody.data;

                //Password hashing
                const hasedPassword = await bcrypt.hashSync(userPassword, 10);

                //database usersModel creation
                await usersModel.create({
                    userName,
                    userEmail,
                    userPassword:hasedPassword
                });
                res.status(200).json({
                    message:"user Signup successfully"
                });
            }catch(err){
                res.status(500).json({
                    message:"server error"
                })
            }
        }
    }catch(err){
        res.status(403).json({
            message:`there is some err ${err}`
        })
    }
});

//signin
app.post("/api/v1/signin", async function(req, res){
    try{
        //input validation 
        const requiredBody = z.strictObject({
            userEmail: z.string().email().max(50),
            userPassword: z.string().min(5).max(20)
                      .refine((password) =>/[A-Z]/.test(password), 
                        {message: "Required atleast one uppercase character"})
                      .refine((password) => /[a-z]/.test(password), 
                        {message: "Required atleast one lowercase character"})
                      .refine((password) => /[0-9]/.test(password), 
                        {message: "Required atleast one number"})
                      .refine((password) => /[!@#$%^&*]/.test(password), 
                        {message: "Required atleast one special character"})
        })
        const parsedRequiredBody = requiredBody.safeParse(req.body);

        if(!parsedRequiredBody.success){
            res.status(403).json({
                message:"incorrect Formate",
                error: parsedRequiredBody.error
            })
        }else{
            const {userEmail, userPassword} = parsedRequiredBody.data;

            //fetching user from db
            const user = await usersModel.findOne({
                userEmail
            });
            if(!user){
                    throw new Error("User not found");
                }else{
                    const matchedPassword = await bcrypt.compare(userPassword, user?.userPassword)
                    if(!matchedPassword){
                        res.json({
                            "message" : "incorrect password"
                        })
                    }else{
                        const authorization = jwt.sign({
                                userId: user._id
                            }, JWT_SECRETE)

                            res.json({
                                "authorization": authorization
                            })
                    }
                }
        }
    }catch(err){
        res.status(403).json({
            message:`there is some err ${err}`
        })
    }
});

//content
app.post("/api/v1/content",authMiddleware, async function(req, res){
    try{
        const link = req.body.link;
        const title = req.body.title;
        await contentModel.create({
                link,
                title,
                userId:req.userID,
                type:"image",
                tags:[]
            })
        res.status(200).json({
            message:"contnet Added"
        })
    }catch(err){
        res.status(411).json({
            message:`there is error${err}`
        })
    }
});

//getContent
app.get("/api/v1/content",authMiddleware, async (req, res)=>{
    try{
        const userId = req.userID;
        const contents = await contentModel.find({
            userId:userId
        }).populate("userId", "userName")
        res.status(200).json({
            contents
        })
    }catch(err){
        res.status(403).json({
            "error":`there is some error ${err}`
        })
    }
});

app.delete("/api/v1/content",authMiddleware, async (req, res)=>{
    try{
        const contentId = req.body.contentId;
        const result = await contentModel.deleteOne({
            userId:req.userID,
            _id:contentId
        })
        if (result.deletedCount == 0){
            res.status(403).json({
                "message":"Content is not removed there is some problem"
            })
        }else{
            res.status(200).json({
                "message":"Content removed"
            })
        }
    }catch(err){
        res.status(403).json({
            "error": `There is some error ${err}`
        })
    }
});

app.post("/api/v1/share",authMiddleware, async(req, res)=>{
    try{
        const share  = req.body.share;
        if(share){
            const randomNumber = hash(10);
            await linksModel.create({
                userId:req.userID,
                hash:randomNumber
            })
            res.status(200).json({
                "message":"You are public now",
                "shareLink":randomNumber
            })
        }else{
            await linksModel.deleteOne({
                userId:req.userID
            })

            res.json({
                "message":"You are private now"
            })
        }
    }catch(err){
        res.status(403).json({
            message:`there are some errors ${err}`
        })
    }
});

app.get("/api/v1/:shareLink", async(req, res)=>{
    try{
            const hash = req.params.shareLink;
            const link = await linksModel.findOne({
                hash
            })
            if(!link){
                res.json({
                    message:"this link is invalid"
                })
                return;
            }

            const contents = await contentModel.find({
                userId:link.userId
            })

            const user = await usersModel.findOne({
                _id:link.userId
            })
            res.json({
                "userName":user?.userName,
                contents
            })
    }catch(err){
        res.status(403).json({
            message:`there are some error ${err}`
        })
    }
});

async function main(){
    await mongoose.connect(MONGO_DB_URL);
    app.listen(3001);
    console.log("Server is running on http://localhost:3001 ");
}

main();