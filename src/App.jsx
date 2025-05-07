import { createBrowserRouter , createRoutesFromElements , Route, RouterProvider } from "react-router-dom";
import { Main_layout } from "./layout/Main_layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import "./style/root.css"
import { Contact } from "./pages/Contact.jsx";
import { ProjectsMore } from "./pages/ProjectsMore.jsx";


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Main_layout/>}>
        <Route index element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/projects/:id" element={<ProjectsMore/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<Contact/>}/>
      </Route>
    )
  )

  return (
   <>
    <RouterProvider router={router}/>
   </>
  )
}

export default App
