interface historicoProps{
    tipo: string;
    valor: number;
    data: string;
    saldo: number;
}

export default function  historico({tipo,valor,data,saldo}: historicoProps) {
    return(
        <div className="quadro-registro">
            <div className="tipo de ação">
                {tipo}
            </div>
            <div className="informacoes-adicionais">
                Valor: R${valor}
                Data: {data}
                Saldo: R${saldo}
            
            </div>
        </div>
    )
}