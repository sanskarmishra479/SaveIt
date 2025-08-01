import { useEffect, useState } from "react"
import { Cards } from "./Cards"
import { Navbar } from "./Navbar"
import { Backend_URL } from "../config"
import axios from "axios"


export const Wrapper = () =>{
    const [content, setContent] = useState<any[]>([])
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
        <div className="w-270 h-auto flex items-center justify-center">
              <div className="h-full w-270 flex-col justify-center">
                <Navbar />
                <div className=" p-2 mt-20 columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-2 space-y-1">
                  {content.map((item) => (
                    <Cards type={item.type} url={item.link} title={item.title} contentId={item._id} />
                  ))}
                </div>
              </div>
        </div>
    )
}