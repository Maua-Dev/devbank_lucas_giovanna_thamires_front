
import { BrowserRouter,  Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Conta from "./pages/Conta";
import Deposito from "./pages/Deposito";
import Saque from "./pages/Saque";
import Transacoes from "./pages/Transacoes";

// import Conta from "./pages/conta";
// <Route path="/conta" element={<Conta />} />  . PASSAR PARA O RETURN QUANDO TERMINAR CONTA
export default function AppRouter(){
    return(
        <BrowserRouter>
        <Routes> 
            <Route path="/" element={<Home />} />
            <Route path="/conta" element={<Conta />} />
             <Route path="/depositar" element={<Deposito />} /> 
             <Route path="/sacar" element={<Saque />} />    
            <Route path="/transacoes" element={<Transacoes />} /> 
        </Routes>
         </BrowserRouter>
    )
}