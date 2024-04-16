import {useState} from 'react';

interface CardProps{
    img:string
}

export default function cardTwo({img}: CardProps){
    const [two, setTwo] = useState(0)

    const increase = () => {
       
      setTwo(( currentTwo => currentTwo + 1))
        
    }
}