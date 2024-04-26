import "../Button.css"


interface ButtonProps {
    img?: string
}
export default function Button({ img }: ButtonProps) {
    return <button className="btn"><img src={img} className="btn-img" /></button>

}

