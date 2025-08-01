import type { IconType } from "../types/IconType"

export const ArrowUpLeft = (props:IconType) =>{
    return(
        <div className={`rounded-md flex items-center justify-center text-white hover:text-black cursor-pointer hover:bg-white hover:shadow-md w-${props.size} h-${props.size} p-2`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" className="w-full h-full">
                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
        </div>
    )
}