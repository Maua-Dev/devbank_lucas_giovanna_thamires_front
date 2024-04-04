import Button from "../components/Button";
import { useState } from 'react'
export default function Home(){

  const [api, setApi] = useState("")

  console.log(api)

    return(
        <>
        <h1>DevBank</h1>
        <div>
          <input
            placeholder="Digite aqui o nome de sua conta bancária"
            onChange={(event) => setApi(event.target.value)}
          />
        </div>
        <div>
          <Button text="Entrar" style={{ borderRadius: '999px' }} />
        </div>
      </>
    )
}