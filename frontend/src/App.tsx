import { CreateContent } from "./components/modal/CreateContent";
import { Wrapper } from "./components/Wrapper"


function App() {

  return (
    <div className="flex justify-center">
      <Wrapper />
      <CreateContent open={true} />
    </div>
  )
}

export default App;
