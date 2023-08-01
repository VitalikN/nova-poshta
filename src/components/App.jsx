import { Route, Routes } from "react-router-dom"
import Layout from "./Layout/Layout"
import TtnPage from "../pages/Ttn/TtnPage"
import DepartmentsPage from "../pages/Departments/DepartmentsPage"


const App = () => {

  return <>
        <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<TtnPage />} />
              <Route path="departments" element={<DepartmentsPage />} />
              <Route path="*" element={<TtnPage />} />
             </Route>
             
              </Routes>
 
 </>
  
}

export default App
