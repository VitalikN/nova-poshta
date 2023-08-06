import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";

const DepartmentsPage = lazy(() =>
  import("../pages/Departments/DepartmentsPage")
);
const TtnPage = lazy(() => import("../pages/Ttn/TtnPage"));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TtnPage />} />
          <Route path="departments" element={<DepartmentsPage />} />
          <Route path="*" element={<TtnPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
