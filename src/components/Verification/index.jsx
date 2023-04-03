import { useState } from "react";
import Homepage from "../Homepage";
import "../Homepage/Button"
import Firstpage from "../Initialpage";


function Verification() {
  const [home, noHome] = useState(true);

  return (
    <>
      {
        home ? (
            <Firstpage>
              <button className="init" onClick={()=>noHome(!home)}>iniciar</button>
          </Firstpage>
        ) : (
            <Homepage>              
                <button className="btn" onClick={() => noHome(!home)}>Inicio</button>              
          </Homepage>
        )}

    </>
  );
}

export default Verification;