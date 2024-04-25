import { Link } from "react-router-dom";
import devimagem from "../assets/devimagem.png";
import { useContext, useEffect, useState } from 'react'
import axios from "axios";
import "../styles/Transacoes.css"
import { Dados_Conta } from "../contextoDevBank/contextoConta";


interface Transacao{
  tipo: string;
  valor: number;
  saldo: number;
  data: number
}

export default function Transacoes(){
    
    const [transacoes,setTransacoes] = useState<Transacao[]>([])
    
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
            const resp = await axios.get(api+'/history');
            const infos = resp.data.all_transactions
            infos.map((info: { type: any; value: any; current_balance: any; timestamp: any; })=>{
              const transacao: Transacao = {
                tipo:info.type,
                valor:info.value,
                saldo:info.current_balance,
                data:info.timestamp,
                
              }
              console.log(transacao)
              setTransacoes((t)=>[...t,transacao])
            })
            
        }
       
        useEffect(() => {
          atualizaHistorico()
      
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
        {transacoes.length === 0  ? <h1>Nenhuma transação foi feita</h1> :null}
        {transacoes != undefined ? transacoes.map((transacao)=> {
          const data = new Date(transacao.data)
          return(
            <div className="box-historico-transacoes">
              <p>
                Tipo: {transacao.tipo}
              </p>
              <p>
                Valor: R${transacao.valor}
              </p>
              <p>
              Saldo: R${transacao.saldo}
              </p>
              <p>
                Data: {data.toLocaleString()}
              </p>
        </div>
          )

        }):null}
        
        <Link className="voltar" to={"/conta"}>
        <button className="btn-voltar">Voltar</button>
        </Link>
     
      
       
        </main>
    )

  }

  