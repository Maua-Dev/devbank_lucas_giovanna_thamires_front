// import Button from "../components/Button";
// import { useState } from 'react'
// export default function Conta(){

//   

  

//     return(
//       <>
//         <h1>Selecione o que deseja fazer</h1>
//         <div>
//            <Button text="Depositar" />
//            <Button text="Sacar" />
//         </div>
//       </>
//     )
// }

import { Link } from "react-router-dom";
import Button from "../components/Button";
import { useState } from 'react';
import devimagem from "../assets/devimagem.png";
import "./Conta.css";
export default function Home() {
  const [api, setApi] = useState("");

  return (
    <main
    className="conta">

      <img src= {devimagem}/>
      < h1
      className="h1_conta">Selecione o que deseja fazer:</h1>
      
      <div>
        <Link to={"/depositar"}>  
        <Button text="Despositar" />
        </Link>
        
        <Link to={"/sacar"}>  
        <Button text="Sacar" />
        </Link>
        
        <Link to={"/transacoes"}>
        <Button text="Transações"/>
        </Link>
      </div>
    </main>
  );
}
