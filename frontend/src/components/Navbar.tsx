import { About } from "../icons/About"
import { Logo } from "../icons/Logo"


export const Navbar = ()=>{
    return(
        <div className="flex justify-center">
            <div className="h-13 w-270 bg-black rounded-b-2xl flex items-center justify-between p-5 text-white">
                <div className="text-white flex items-center gap-2">
                    <Logo />
                    <h1 className="font-['Unica_One'] text-2xl">SaveIt</h1>
                </div>
                <About />
            </div>
        </div>
    )
}