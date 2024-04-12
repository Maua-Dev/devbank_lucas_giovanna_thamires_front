// import { useState } from 'react'
// import './App.css'
// import Button from './components/Button'


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <h1>DevBank</h1>
//       <div>
//         <input
//         placeholder = "Digite aqui o nome de sua conta bancária"
//       />
//       </div>
//       <div>
//       <Button text ="Entrar" />
//     </div>
//     </>
//   )
// }

// export default App

import { useState } from 'react'
import './App.css'
// import Button from './components/Button'
import AppRouter from './AppRouter'
import { Dados } from './contextoDevBank/contextoConta'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Dados>
      <AppRouter />
    </Dados>
  )
}

export default App

