import { Link, useNavigate } from "react-router-dom"
import Button from "./Button"
import { Input } from "./Input"
import { useRef } from "react"
import axios from "axios"
import { Backend_URL } from "../config"

export const Signup = () => {
    const usernameRef = useRef<HTMLInputElement>(null);
    const useremailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    async function signup(){
            const username = usernameRef.current?.value;
            const useremail = useremailRef.current?.value;
            const password = passwordRef.current?.value;
            await axios.post(`${Backend_URL}/api/v1/signup` ,{
                userName:username,
                userEmail:useremail,
                userPassword:password
            });
            navigate("/signin");
    }
    return(
        <div className="h-screen w-screen flex items-center justify-center">
            <div className="w-110 h-120  rounded-3xl border-2 border-slate-200/40 shadow-lg inset-shadow-sm inset-shadow-slate-500/10 p-4 ">
                <div className="h-auto w-full grid items-center justify-center p-4">
                    <h1 className="font-bold text-4xl p-4">Signup</h1>
                </div>
                <div className="h-auto p-8">
                    <Input placeholder="Username" inputType="text" inputReferance={usernameRef}/>
                    <Input placeholder="Email" inputType="email" inputReferance={useremailRef}/>
                    <Input placeholder="Password" inputType="password" inputReferance={passwordRef}/>
                    <div className="mt-4">
                        <Button variant="primary" text="Signup" size="md" onclick={signup}/>
                    </div>
                    <div className="flex items-center justify-center mt-4">
                        <p className="text-lg">If you have already and account then <Link className="text-blue-500 underline flex justify-center" to="/signin">singin</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}