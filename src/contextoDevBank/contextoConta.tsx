 import { ReactNode, createContext, useState } from "react"

type Dados_ContaType = {
    api:string,
    name:string,
    agency:string,
    account:string,
    current_balance:number,
    
    setApi: React.Dispatch<React.SetStateAction<string>>,
    setName: React.Dispatch<React.SetStateAction<string>>,
    setAgency: React.Dispatch<React.SetStateAction<string>>,
    setAccount: React.Dispatch<React.SetStateAction<string>>,
    setCurrent_Balance: React.Dispatch<React.SetStateAction<number>>,
}

const defaultDados_Conta : Dados_ContaType = {
    api: "",
    name: "",
    agency: "",
    account: "",
    current_balance: 0,
    
    setApi: ()=> {},
    setName: ()=> {},
    setAgency: ()=> {},
    setAccount: ()=> {},
    setCurrent_Balance: ()=> {},
}

export const Dados_Conta = createContext<Dados_ContaType>(defaultDados_Conta);

export const Dados = ({children} : {children: ReactNode }) => {
    
    const [api, setApi] = useState<string>("")
    const [name, setName] = useState<string>("")
    const [agency, setAgency] = useState<string>("")
    const [account, setAccount] = useState<string>("")
    const [current_balance, setCurrent_Balance] = useState<number>(0)
    
    return (
        <Dados_Conta.Provider value = {{
            api,
            setApi,
            name,
            setName,
            agency,
            setAgency,
            account,
            setAccount,
            current_balance,
            setCurrent_Balance,
        }}>
        {children}
        </Dados_Conta.Provider>


    );
    };

 

 