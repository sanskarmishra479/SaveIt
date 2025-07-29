import Button from "./Button"
import { Input } from "./Input"

export const Signup = () => {
    return(
        <div className="h-screen w-screen flex items-center justify-center">
            <div className="w-140 h-160  rounded-3xl border-2 border-slate-200/40 shadow-lg inset-shadow-sm inset-shadow-slate-500/10 p-4 ">
                <div className="h-auto w-full grid items-center justify-center p-4">
                    <h1 className="font-bold text-4xl p-4">Signup</h1>
                </div>
                <div className="h-auto p-8">
                    <Input placeholder="Username" inputType="text"/>
                    <Input placeholder="Email" inputType="email"/>
                    <Input placeholder="Password" inputType="password"/>
                    <div className="mt-4">
                        <Button variant="primary" text="Signup" size="md"/>
                    </div>
                    <div className="flex items-center justify-center mt-8">
                        <p className="text-xl">If you have already and account then <a className="text-blue-500 underline" href="/signin">singin</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}