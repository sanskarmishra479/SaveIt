import { useNavigate } from "react-router-dom";
import {motion} from "framer-motion"
export const LandingNav = () =>{
    const navigate = useNavigate();
    return(
        <div className="fixed top-3 left-10/12 w-full z-[4]">
            <div className="h-18 w-70 rounded-full flex items-center justify-center gap-4 text-amber-50">
                <motion.button whileHover={{ scale: 1.2 }} 
                    className="w-20 h-10 bg-black hover:text-black hover:bg-amber-50 border-1 border-zinc-900 hover:border-zinc-900 text-md font-[Josefin_Sans] rounded-full cursor-pointer shadow-2xl shadow-white"
                    onClick={()=>{
                        navigate('/signup')
                    }} >Signup</motion.button>

                <motion.button whileHover={{ scale: 1.2 }}
                    className="w-20 h-10 bg-black hover:text-black hover:bg-amber-50 border-1 border-zinc-900 hover:border-zinc-900 text-md font-[Josefin_Sans] rounded-full cursor-pointer"
                    onClick={()=>{
                         navigate('/signin')
                    }}
                >Signin</motion.button>
            </div>
        </div>
    )
}