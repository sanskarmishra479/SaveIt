import { createContext, useState } from "react";
import { CreateContent } from "./components/modal/CreateContent";
import { Wrapper } from "./components/Wrapper"


interface ButtonContextType {
  setModalOpen: (value: boolean) => void;
}
export const ButtonContext = createContext<ButtonContextType>({ setModalOpen: () => {} });

function App() {
  const [modalOpen, setModalOpen]= useState(true)

  return (
    <div className="flex justify-center">
      <ButtonContext.Provider value={{ setModalOpen}}>
        <Wrapper />
      </ButtonContext.Provider>
      <CreateContent open={modalOpen} onClose={() => {
          setModalOpen(false)
        }} />
    </div>
  )
}

export default App;
