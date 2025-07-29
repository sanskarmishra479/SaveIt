import type { InputTypes } from "../types/InputTypes"



export const Input = ({onChange, placeholder}:InputTypes) =>{
    return(
        <div className="w-full h-10 rounded-md border border-gray-300 px-3 py-2">
            <input type="text" placeholder={placeholder} onChange={onChange} className="w-full h-full outline-none" />
        </div>
    )
}