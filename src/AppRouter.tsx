
import { BrowserRouter,  Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import Conta from "./pages/conta";
// <Route path="/conta" element={<Conta />} />  . PASSAR PARA O RETURN QUANDO TERMINAR CONTA
export default function AppRouter(){
    return(
        <BrowserRouter>
        <Routes> 
            <Route path="/" element={<Home />} />
            
        </Routes>
         </BrowserRouter>
    )
}