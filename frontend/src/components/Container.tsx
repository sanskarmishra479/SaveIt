import { useState } from "react"
import { Addsearch } from "./Addsearch"
import { ButtonContext } from "./context/ButtonContext"
import { Wrapper } from "./Wrapper"
import { CreateContent } from "./modal/CreateContent"

export const Container = () =>{
        const [modalOpen, setModalOpen]= useState(false)
    return(
        <div className="h-full w-full flex items-center justify-center">
            <Wrapper />
            <div className="fixed -bottom-140 left-10 h-screen">
                <ButtonContext.Provider value={{ setModalOpen}}>
                    <Addsearch />
                </ButtonContext.Provider>
                <CreateContent open={modalOpen} onClose={() => {
                     setModalOpen(false)
                }} />
            </div>
        </div>
    )
}