

import "../Button.css"
import depositar from "../assets/depositar.png";
import retirar from "../assets/retirar.png";
import transacao from "../assets/transacoes.png";


interface ButtonProps{
    text: string
}
export default function Button({text}:ButtonProps){
    return <button>{text}</button>

}

// export function ButtonDeposit({text}:ButtonProps){
//     return <button>{text}<img src={depositar}/></button>
// }

// export function ButtonWithdraw({text}:ButtonProps){
//     return <button>{text}<img src={retirar}/></button>
// }

// export function ButtonTransactions({text}:ButtonProps){
//     return <button>{text}<img src={transacao}/></button>
// }
