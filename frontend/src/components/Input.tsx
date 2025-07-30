import type { InputTypes } from "../types/InputTypes"



export const Input = ({placeholder, inputType, inputReferance}:InputTypes) =>{
    return(
        <div className="w-full h-10 rounded-md mt-4 border-1 border-slate-400 px-3 py-2">
            <input type={inputType} placeholder={placeholder} className="w-full h-full outline-none" ref={inputReferance} />
        </div>
    )
}