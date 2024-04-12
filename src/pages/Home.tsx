import { useNavigate } from "react-router-dom";

import { useContext, useEffect } from 'react'
import "./Home.css"
import devimagem from "../assets/devimagem.png"
import { Dados_Conta } from "../contextoDevBank/contextoConta";



export default function Home(){
  const {api, setApi} = useContext(Dados_Conta)
  const navegador = useNavigate()
  
  const iniciar = () =>  {
    const chave = "https://r2tcz6zsokynb72jb6o4ffd5nm0ryfyz.lambda-url.us-west-2.on.aws/"
    if(chave === api)
      navegador("/conta")
    else
      alert("Erro! Conta não reconhecida.")
  }

  useEffect(()=> {
    setApi("")
  }, []

  )
    return(
      <main
      className="home">
        
        <img 
        src= {devimagem}/>
          <input
            className="home_input"
            placeholder="Digite o nome de sua conta bancária"
            onChange={(event) => setApi(event.target.value)}
            size={50} //definição do tamanho aqui !
          />

              <button
              onClick={iniciar} >Entrar</button>
           
           </main>
    )
}

