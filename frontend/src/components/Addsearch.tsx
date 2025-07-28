import { Btnicon } from "../icons/Btnicon"
import { Shareicon } from "../icons/Shareicon"
import Button from "./Button"
import { Search } from "./Search"

export const Addsearch = ()=>{
    return(
        <>
            <div className="flex gap-5 items-center justify-center mt-5">
                <div className="grid items-center justify-between gap-2">
                    <Button variant="secondary" startIcon={<Btnicon />}/>
                    <Button variant="primary" startIcon={<Shareicon />} />
                </div>
                <Search />
            </div>
        </>
    )
}