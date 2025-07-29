import { Cross } from "../../icons/Cross"
import Button from "../Button"
import { Input } from "../Input"

//controlled component
export const CreateContent = ({open, onClose}:{open:boolean, onClose:() => void}) =>{
    return(
        <>
        {open && 
            <div className="w-screen h-screen fixed top-0 left-0 bg-slate-600/30 backdrop-blur-xs z-50 flex items-center justify-center">
                <div className="w-90 h-110 bg-white rounded-2xl shadow-md flex-clo items-center justify-center border-2 border-gray-300 p-6">
                    <div className="flex items-center justify-end" onClick={onClose}><Cross /></div>
                    <div>
                        <div className="flex items-center justify-center mt-5"><h1 className="text-2xl font-bold">Add Content</h1></div>
                        <div className="flex flex-col gap-2 mt-5">
                            <Input placeholder="Title" onChange={() => {}} />
                            <Input placeholder="Link" onChange={() => {}} />
                            <Button text="Add" variant="primary" />
                        </div>
                    </div>
                </div>
                
            </div>}
        </>
    )
}