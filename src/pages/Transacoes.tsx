import { Link } from "react-router-dom";
import devimagem from "../assets/devimagem.png";
import { useContext, useEffect, useState } from 'react'
import axios from "axios";
import "./Transacoes.css"
import { Dados_Conta } from "../contextoDevBank/contextoConta";



export default function Transacoes(){
    const { setName, setAgency, setAccount, setCurrent_Balance, api, name, agency, account, current_balance } = useContext(Dados_Conta)
  const chamaApi = async () => {
    const response = await axios.get(api)
    setName(response.data.name)
    setAgency(response.data.agency)
    setAccount(response.data.account)
    setCurrent_Balance(response.data.current_balance)
  }

  useEffect(() => {
    chamaApi()

  }, [])

    return(
        <main className="transacoes">
        <div className="cabecalho">
          <img className="imagem-conta"
            src={devimagem} />
          <h1 className="texto-conta"> Histórico de transaç~i: </h1>
          <div className="box-dados-conta">
            <h2 className="dados-conta">Nome: {name}<br />
              Agencia: {agency}<br />
              Conta: {account}<br />
              Saldo atual: {current_balance}<br />
            </h2>
          </div>
        </div>
        </main>
    )

  
}