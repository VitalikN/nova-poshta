import { Container } from "@mui/material";
import TtnSearch from "../../components/Ttn/TtnSearch";
import { TtnList } from "../../components/Ttn/TtnList";

const TtnPage =()=>{
    return(

        <>
        <Container>
          <TtnSearch />
          <TtnList />
        </Container>
      </>

    )
}
export default TtnPage;