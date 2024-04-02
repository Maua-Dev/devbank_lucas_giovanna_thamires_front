import { useState } from 'react'
import './App.css'
import Button from './components/Button'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>DevBank</h1>
      <input
        placeholder = "Digite aqui o nome de sua conta bancária"
      />
      <Button text = "Entrar"/>
    </>
  )
}

export default App
