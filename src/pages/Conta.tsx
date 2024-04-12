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
import { useContext, useEffect } from 'react'
import axios from "axios";
import devimagem from "../assets/devimagem.png";
import { Dados_Conta } from "../contextoDevBank/contextoConta";
import "./Conta.css";

export default function Home() {
 
  const { setName, setAgency, setAccount, setCurrent_Balance, api, name, agency, account, current_balance} = useContext(Dados_Conta)  
  const chamaApi = async () => {
    const response = await axios.get(api)
    setName(response.data.name)
    setAgency(response.data.agency)
    setAccount(response.data.account)
    setCurrent_Balance(response.data.current_balance)
  }
  
  useEffect(()=> {
    chamaApi()
  },[])

  return (
    <main
    className="conta">
      
      <img 
      src= {devimagem}/>
      
      <div>
        <h2>Nome {name}
            Agencia {agency}
            Conta {account}
            Saldo {current_balance}    
      </h2>
      </div>
      <h1>Selecione o que deseja fazer:</h1>
      
      <div>
        <Link to={"/depositar"} >  
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
