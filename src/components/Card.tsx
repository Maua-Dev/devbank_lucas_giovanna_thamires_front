interface CardProps {
  number: number,
  value: number,
  setValue: React.Dispatch<React.SetStateAction<number>>
}


export default function Card({ number, value, setValue }: CardProps) {



  return (
    <div >
      <div className='card'>
        <h1 className='card-title'>{number}</h1>
        <div className='values'>

          <button onClick={() => setValue(value === 0 ? 0 : value - 1)}>-</button>
          <p className='card-value'>{value}</p>
          <button onClick={() => setValue(value + 1)}>+</button>


        </ div>
      </div>
      <h2 className="quantidades">
        Quantidade
      </h2>

    </div>

  );
}