import type { InputTypes } from "../types/InputTypes"

const variantStyle = {
    "primary": "w-full h-10 rounded-md border border-gray-300 px-3 py-2",
    "secondary": "w-full h-12 rounded-md border border-gray-300 px-3 py-2",
    "tertiary": "w-full h-14 rounded-md border border-gray-300 px-3 py-2"
}

export const Input = (props:InputTypes) =>{
    return(
        <div className={variantStyle[props.size]}>
        </div>
    )
}