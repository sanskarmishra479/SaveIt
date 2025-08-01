import { About } from "../icons/About"
import { Logo } from "../icons/Logo"


export const Navbar = ()=>{
    return(
        <div className="h-30 w-full p-2 mt-3">
            <div className="flex justify-center ">
                <div className="h-14 w-270 bg-black rounded-2xl shadow-2xl flex items-center justify-between p-5 text-white">
                    <div className="text-white flex items-center gap-2">
                        <Logo />
                        <h1 className="font-['Unica_One'] text-2xl">SaveIt</h1>
                    </div>
                    <About />
                </div>
            </div>
        </div>
    )
}