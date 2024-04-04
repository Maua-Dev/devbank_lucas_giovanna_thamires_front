import { Link } from "react-router-dom";
import Button from "../components/Button";
import { useState } from 'react'

export default function Home(){

  const [api, setApi] = useState("")

    return(
      <>
        <h1>DevBank</h1>
        <h3>O seu banco virtual</h3>
        <div>
          <input
            placeholder="Digite aqui o nome de sua conta bancária"
            onChange={(event) => setApi(event.target.value)}
          />
        </div>
        <div>
           <Link to={"/conta"}>
              <Button text= "Entrar" />
           </Link>
           <Button text= "histório" />
             </div>
           </>
    
    );
}