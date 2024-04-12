
import { BrowserRouter,  Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Conta from "./pages/Conta";
// import Deposito from "./pages/Deposito";
// import Saque from "./pages/Saque";
// import Transacoes from "./pages/Deposito";

// import Conta from "./pages/conta";
// <Route path="/conta" element={<Conta />} />  . PASSAR PARA O RETURN QUANDO TERMINAR CONTA
export default function AppRouter(){
    return(
        <BrowserRouter>
        <Routes> 
            <Route path="/" element={<Home />} />
            <Route path="/conta" element={<Conta />} />
            {/* <Route path="/saque" element={<Saque />} />
            <Route path="/Deposito" element={<Deposito />} />
            <Route path="/Transacoes" element={<Transacoes />} /> */}
        </Routes>
         </BrowserRouter>
    )
}