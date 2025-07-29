import { createContext } from "react";

interface ButtonContextType {
  setModalOpen: (value: boolean) => void;
}

export const ButtonContext = createContext<ButtonContextType>({ setModalOpen: () => {} });