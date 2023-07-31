import { Route, Routes } from "react-router-dom"
import Layout from "./Layout/Layout"
import TnnPage from "../pages/Tnn/TnnPage"
import DepartmentsPage from "../pages/Departments/DepartmentsPage"


const App = () => {

  return <>
        <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<TnnPage />} />
              <Route path="departments" element={<DepartmentsPage />} />
              <Route path="*" element={<TnnPage />} />
             </Route>
             
              </Routes>
 
 </>
  
}

export default App
