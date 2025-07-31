import { useEffect, useState } from "react"
import { Addsearch } from "./Addsearch"
import { Cards } from "./Cards"
import { ButtonContext } from "./context/ButtonContext"
import { Greeting } from "./Greeting"
import { CreateContent } from "./modal/CreateContent"
import { Navbar } from "./Navbar"
import { Backend_URL } from "../config"
import axios from "axios"


export const Wrapper = () =>{
    const [content, setContent] = useState<any[]>([])
    const [modalOpen, setModalOpen]= useState(false)
    useEffect(() => {
        const token = localStorage.getItem("authorization")
        axios.get(`${Backend_URL}/api/v1/content`,{
            headers: {
                "authorization": token
            }
        })
        .then((res) => {
            setContent(res.data.contents)
            console.log(res.data.contents);
            
        })
    }, [])
    return(
        <div className="w-screen h-screen flex items-center justify-center">
              <div className="h-full w-270 flex-col justify-center">
                <Navbar />
                <Greeting />
                <ButtonContext.Provider value={{ setModalOpen}}>
                  <Addsearch />
                </ButtonContext.Provider>
                <CreateContent open={modalOpen} onClose={() => {
                      setModalOpen(false)
                    }} />
                <div className="p-2 mt-20 columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                  {content.map((item) => (
                    <Cards type={item.type} url={item.link} title={item.title} />
                  ))}
                </div>
              </div>
        </div>
    )
}