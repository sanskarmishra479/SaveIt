import { useContext } from "react"
import { Btnicon } from "../icons/Btnicon"
import { Shareicon } from "../icons/Shareicon"
import Button from "./Button"
import { Search } from "./Search"
import { ButtonContext } from "../App"

export const Addsearch = ()=>{
    const { setModalOpen } = useContext(ButtonContext);
    return(
        <>
            <div className="flex gap-5 items-center justify-center mt-5" >
                <div className="grid items-center justify-between gap-2">
                    <Button variant="secondary" startIcon={<Btnicon />} onclick={() => {
                        setModalOpen(true)
                    }}/>
                    <Button variant="primary" startIcon={<Shareicon />} />
                </div>
                <Search />
            </div>
        </>
    )
}