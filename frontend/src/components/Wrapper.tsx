import { useState } from "react"
import { Addsearch } from "./Addsearch"
import { Cards } from "./Cards"
import { ButtonContext } from "./context/ButtonContext"
import { Greeting } from "./Greeting"
import { CreateContent } from "./modal/CreateContent"
import { Navbar } from "./Navbar"

export const Wrapper = () =>{
    const [modalOpen, setModalOpen]= useState(false)
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
                  <Cards type="youtube" url="https://www.youtube.com/watch?v=Vw74YgG4jP0" title="India VS England 2025" />
                  <Cards type="twitter" url="https://x.com/sanskarXdev/status/1948672877819297949" title="Hostel Life" />
                  <Cards type="instagram" url="https://www.instagram.com/p/DMPz4mOx0oI/?utm_source=ig_web_copy_link" title="Ind vs Eng" />
                  <Cards type="facebook" url="https://www.facebook.com/share/v/16qYXVC5NR/" title="Ganga River" />
                  <Cards type="linkedin" url="https://www.linkedin.com/posts/sanskar1_machinelearning-datascience-ai-activity-7137869215482413056-q8Ks?utm_source=share&utm_medium=member_desktop&rcm=ACoAADc57ggBSbI35y5kyyNy-IO8imavmQLUGvY" title="Sanskar's ML Project" />
                  <Cards type="pinterest" url="https://in.pinterest.com/pin/6825836928766473/" title="Cars" />
                  <Cards type="other" url="https://gemini.google.com/app?hl=en-IN" title="Google" />
                </div>
              </div>
        </div>
    )
}