import { Link } from "react-router-dom";
import Button from "../components/Button";
import { useState } from 'react'
import "./Home.css"
import devimagem from "../assets/devimagem.png"
export default function Home(){

  const [api, setApi] = useState("")

    return(
      <main
      className="home">
        
        <img src= {devimagem}/>
          <input
            className="home_input"
            placeholder="Digite o nome de sua conta bancária"
            onChange={(event) => setApi(event.target.value)}
            size={50} //definição do tamanho aqui !
          />
           <Link to={"/conta"}>
              <Button 
              className = "button_input"
              text= "Entrar" />
           </Link>
           </main>
    )
}

