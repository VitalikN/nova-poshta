import { Container } from "@mui/material";
import DepartmentsSearch from "../../components/Departments/DepartmentsSearch";
import { PaginationC } from "../../components/PaginationC";
import { DepartmentsList } from "../../components/Departments/DepartmentsList";

const DepartmentsPage = () => {
  return (
    <>
      <Container>
        <DepartmentsSearch />
        <DepartmentsList />
        <PaginationC />
      </Container>
    </>
  );
};

export default DepartmentsPage;
