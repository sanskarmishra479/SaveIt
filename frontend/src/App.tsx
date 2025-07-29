import { useState } from "react";
import { CreateContent } from "./components/modal/CreateContent";
import { Wrapper } from "./components/Wrapper"
import { ButtonContext } from "./components/context/ButtonContext";
import { BrowserRouter } from "react-router-dom";



function App() {
  const [modalOpen, setModalOpen]= useState(false)

  return (
    <BrowserRouter>
        <div className="flex justify-center">
          <ButtonContext.Provider value={{ setModalOpen}}>
            <Wrapper />
          </ButtonContext.Provider>
          <CreateContent open={modalOpen} onClose={() => {
              setModalOpen(false)
            }} />
      </div>
    </BrowserRouter>
  )
}

export default App;
