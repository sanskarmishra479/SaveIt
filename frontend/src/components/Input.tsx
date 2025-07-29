import type { InputTypes } from "../types/InputTypes"



export const Input = ({onChange, placeholder, inputType}:InputTypes) =>{
    return(
        <div className="w-full h-20 rounded-2xl mt-4 border-1 border-slate-400 px-3 py-2 text-2xl">
            <input type={inputType} placeholder={placeholder} onChange={onChange} className="w-full h-full outline-none" />
        </div>
    )
}