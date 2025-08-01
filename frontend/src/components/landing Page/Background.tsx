import { Forground } from "./Forground"

export const Background = () =>{
    return(
        <div className="relative w-screen h-full z-[2] flex items-center justify-center">
            <h1 className="absolute text-[240px] font-semibold tracking-tighter text-zinc-900 font-[Poppins]">SaveIt.</h1>
            <Forground />
        </div>
    )
}