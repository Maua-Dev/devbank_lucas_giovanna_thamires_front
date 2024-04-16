import { Link } from "react-router-dom";
import devimagem from "../assets/devimagem.png";
import { useContext, useEffect, useState } from 'react'
import axios from "axios";
import "./Deposito.css"
import Card from "../components/Card";
import { Dados_Conta } from "../contextoDevBank/contextoConta";
//importação das notinhas
import nota2 from "../assets/nota2.png";
import nota5 from "../assets/nota5.png";
import nota10 from "../assets/nota10.png";
import nota20 from "../assets/nota20.png";
import nota50 from "../assets/nota50.png";
import nota100 from "../assets/nota100.png";
import nota200 from "../assets/nota200.png";
export default function Deposito(){
    
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

    return(
    <main className= "deposito">
        <div className="cabecalho">
        <img className="imagem-conta"
          src={devimagem} />
        <h1 className="texto-conta"> Selecione as cédulas e a quantidade que você deseja: </h1>
        <div className="box-dados-conta">
          <h2 className="dados-conta">Nome: {name}<br />
            Agencia: {agency}<br />
            Conta: {account}<br />
            Saldo atual: {current_balance}<br />
          </h2>
        </div>
      </div>

      <div className= "cédulas-cima">
        <img src={nota2}/>
        <h2 className="quantidades">
          Quantidade
        </h2>
        
      </div>

      <Link className="voltar" to={"/conta"}>
        <button className="btn-voltar">Voltar</button>
      </Link>
    </main>
    )
}