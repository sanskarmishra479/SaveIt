import { BrowserRouter, Routes, Route  } from "react-router-dom";
import { Signin } from "./components/Signin";
import { Signup } from "./components/Signup";
import { Wrapper } from "./components/Wrapper";



function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Wrapper />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
