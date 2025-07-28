import { NextFunction, Request, Response } from "express"
import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_SECRETE } from "./config";

export interface UserPayload extends JwtPayload {
  userId: string;
}

export const authMiddleware = (req:Request, res:Response, 
    next:NextFunction) => {
        const token = req.header("authorization");
        const decoded = jwt.verify(token as string, JWT_SECRETE) as UserPayload;
        if(decoded){
            req.userID = decoded.userId
            next()
        }else{
            res.status(403).json({
                message:"You are not logged in"
            })
        }
}