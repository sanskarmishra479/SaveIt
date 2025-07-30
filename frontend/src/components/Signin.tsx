import { Link, useNavigate } from "react-router-dom"
import Button from "./Button"
import { Input } from "./Input";
import { useRef } from "react";
import { Backend_URL } from "../config";
import axios from "axios";


export const Signin = () => {
    const userEmailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    async function singin(){
        const useremail = userEmailRef.current?.value;
        const password = passwordRef.current?.value;
        const response = await axios.post(`${Backend_URL}/api/v1/signin` ,{
            userEmail:useremail,
            userPassword:password
        })
        const authorization = response.data.authorization
        if(!authorization){
            return 
        }else{
            localStorage.setItem("authorization",authorization);
            navigate("/dashboard")
        }
    }

    return(
        <div className="h-screen w-screen flex items-center justify-center">
            <div className="w-110 h-120  rounded-3xl border-2 border-slate-200/40 shadow-lg inset-shadow-sm inset-shadow-slate-500/10 p-4 ">
                <div className="h-auto w-full grid items-center justify-center p-4">
                    <h1 className="font-bold text-4xl p-4">Signin</h1>
                </div>
                <div className="h-auto p-8">
                    <Input placeholder="Email" inputType="email" inputReferance={userEmailRef}/>
                    <Input placeholder="Password" inputType="password" inputReferance={passwordRef}/>
                    <div className="mt-4">
                        <Button variant="primary" text="Signup" size="md" onclick={singin}/>
                    </div>
                    <div className="flex items-center justify-center mt-10">
                        <p className="text-lg">If you did not have an account then <Link className="text-blue-500 underline" to="/signup">singup</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}