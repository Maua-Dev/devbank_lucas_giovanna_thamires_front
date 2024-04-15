

import "../Button.css"


interface ButtonProps {
    img?: string
}
export default function Button({ img }: ButtonProps) {
    return <button className="btn"><img src={img} className="btn-img" /></button>

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
