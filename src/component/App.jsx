
import About from "../pages/About"
import Skills from "../pages/skills"
import Projects from "../pages/project"
import Workexperience from "../pages/workexperience"

import {BrowserRouter , Routes , Route} from 'react-router-dom'



function App() {
  

  return (
   <>

   <BrowserRouter>
   <Routes>
    <Route path="/" element={<About github="https://github.com/Ragul198" linkden="https://www.linkedin.com/in/ragul-a-647850297/" gmail="mailto:ragul198a@gmail.com" ></About>}></Route>
    <Route path="/about" element={<About ></About>}></Route>
    <Route path="/skills" element={<Skills></Skills>}></Route>
    <Route path="/projects" element={<Projects></Projects>}></Route>
    <Route path="/workexperience" element={<Workexperience></Workexperience>}></Route>
    
    
   </Routes>
   </BrowserRouter>
   

   </>
  )
}

export default App
