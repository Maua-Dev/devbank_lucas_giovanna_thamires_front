import devimagem from "../assets/devimagem.png";
import { useContext, useEffect } from 'react'
import axios from "axios";
import { Dados_Conta } from "../contextoDevBank/contextoConta";
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

    </main>
    )
}