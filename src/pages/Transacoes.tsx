import { Link } from "react-router-dom";
import devimagem from "../assets/devimagem.png";
import { useContext, useEffect, useState } from 'react'
import axios from "axios";
import "../styles/Transacoes.css"
import { Dados_Conta } from "../contextoDevBank/contextoConta";
import historico from "../components/Historico";


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

     const atualizaHistorico = async () => {
       const resp = await axios.get(api +'/history')
       const historicoTransacoes = resp.data.all_transactions
     }

     useEffect(() => {
      atualizaHistorico();
  
    }, [])

    return(
        <main className="transacoes">
        <div className="cabecalho">
          <img className="imagem-conta"
            src={devimagem} />
          <h1 className="texto-conta"> Histórico de transações</h1>
          <div className="box-dados-conta">
            <h2 className="dados-conta">Nome: {name}<br />
              Agencia: {agency}<br />
              Conta: {account}<br />
              Saldo atual: {current_balance}<br />
            </h2>
          </div>
        </div>
        <Link className="voltar" to={"/conta"}>
        <button className="btn-voltar">Voltar</button>
        </Link>

        </main>
    )

  
}