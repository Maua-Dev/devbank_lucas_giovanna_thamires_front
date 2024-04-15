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
import depositar from "../assets/depositar.png"
import retirar from "../assets/retirar.png"
import transacao from "../assets/transacao.png"

// import depositar from "../assets/depositar.png";
// import retirar from "../assets/retirar.png";
// import transacao from "../assets/transacao.png";
export default function Home() {

  const { setName, setAgency, setAccount, setCurrent_Balance, api, name, agency, account, current_balance } = useContext(Dados_Conta)
  const chamaApi = async () => {
    const response = await axios.get(api)
    setName(response.data.name)
    setAgency(response.data.agency)
    setAccount(response.data.account)
    setCurrent_Balance(response.data.current_balance)
    console.log(name)
  }

  useEffect(() => {
    chamaApi()

  }, [])

  return (
    <main
      className="conta">
      <div className="cabecalho">
        <img className="imagem-conta"
          src={devimagem} />
        <h1 className="texto-conta"> Selecione o que deseja fazer: </h1>
        <div className="box-dados-conta">
          <h2 className="dados-conta">Nome: {name}<br />
            Agencia: {agency}<br />
            Conta: {account}<br />
            Saldo atual: {current_balance}<br />
          </h2>
        </div>
      </div>

      {/* <img src={depositar}/> */}


      <div className="buttons">
        <Link to={"/depositar"} >
          <Button img={depositar} />
        </Link>

        <Link to={"/sacar"}>
          <Button img={retirar} />
        </Link>

        <Link to={"/transacoes"}>
          <Button img={transacao} />
        </Link>

      </div>
      <Link className="voltar" to={"/"}>
        <button className="btn-voltar">Voltar</button>
      </Link>
    </main>
  );
}
