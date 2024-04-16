import { Link } from "react-router-dom";
import devimagem from "../assets/devimagem.png";
import { useContext, useEffect, useState } from 'react'
import axios from "axios";
import "./Deposito.css"
import Card from "../components/Card";
import { Dados_Conta } from "../contextoDevBank/contextoConta";


export default function Deposito() {

  const [dois, setDois] = useState(0)
  const [cinco, setCinco] = useState(0)
  const [dez, setDez] = useState(0)
  const [vinte, setVinte] = useState(0)
  const [cinquenta, setCinquenta] = useState(0)
  const [cem, setCem] = useState(0)
  const [duzentos, setDuzentos] = useState(0)
  
  const [totalDepositado, setTotalDepositado] = useState(0)

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

  useEffect(() => {
    setTotalDepositado(dois * 2 + cinco * 5 + dez *10 + vinte * 20 + cinquenta * 50 + cem * 100 + duzentos * 200)
  }, [dois, cinco, dez, vinte, cinquenta, cem, duzentos])

  return (
    <main className="deposito">
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

      <h1 className="frase-total-depositado">Total depositado: R$ {totalDepositado},00</h1>

      <div className="cédulas-cima">
          <Card number={2} value={dois} setValue={setDois} />
          <Card number={5} value={cinco} setValue={setCinco} />
          <Card number={10} value={dez} setValue={setDez} />
          <Card number={20} value={vinte} setValue={setVinte} />
          <Card number={50} value={cinquenta} setValue={setCinquenta} />
          <Card number={100} value={cem} setValue={setCem} />
          <Card number={200} value={duzentos} setValue={setDuzentos} />
      </div>

      <Link className="voltar" to={"/conta"}>
        <button className="btn-voltar">Voltar</button>
      </Link>
    </main>
  )
}