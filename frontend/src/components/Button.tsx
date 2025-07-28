import type { ButtonTypes } from "../types/ButtonTypes";


const variantStyle = {
    "primary": "bg-black text-gray-200 rounded-full p-2 shadow-md cursor-pointer hover:bg-gray-800 ",
    "secondary":"bg-gray-200 text-black rounded-full p-2 shadow-md cursor-pointer hover:bg-gray-300 inset-shadow-sm inset-shadow"
}

function Button(props:ButtonTypes){
    return(
        <button className={variantStyle[props.variant]} onClick={props.onclick}>
            {props.startIcon}
            {props.text}
        </button>
    )
}

export default Button;