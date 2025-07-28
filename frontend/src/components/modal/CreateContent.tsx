import Button from "../Button"

export const CreateContent = ({open, onClose}) =>{
    return(
        <>
        {open && 
            <div className="w-screen h-screen fixed top-0 left-0 bg-slate-600/30 backdrop-blur-xs z-50 flex items-center justify-center">
                <div className="w-90 h-110 bg-white rounded-md shadow-md flex-clo items-center justify-center border-2 border-gray-300 p-6">
                    <div className="flex items-center justify-center"><h1 className="text-2xl font-bold">Add Content</h1></div>
                    <div className="flex flex-col gap-2">
                    <input type="text" placeholder="Title"  className="w-full h-10 rounded-md border border-gray-300 px-3 py-2"/>
                    <input type="text" placeholder="Description" className="w-full h-10 rounded-md border border-gray-300 px-3 py-2"/>
                    <input type="text" placeholder="Image URL" className="w-full h-10 rounded-md border border-gray-300 px-3 py-2"/>
                    <input type="text" placeholder="Link" className="w-full h-10 rounded-md border border-gray-300 px-3 py-2"/>
                    <Button text="Add" variant="primary" />
                    </div>
                </div>
                
            </div>}
        </>
    )
}