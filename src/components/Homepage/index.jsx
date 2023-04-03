import "./style.css"
import Headerx from "./Header";
import Leftside from "./Leftside";
import Container from "../Container";

function Homepage({ children }) {

  return (
    <>
      <Headerx>
        {children}
      </Headerx>
      <Container>
        <Leftside>          
        </Leftside>
      </Container> 
    </>
  )
}

export default Homepage;