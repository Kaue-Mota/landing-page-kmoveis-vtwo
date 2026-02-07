import { Routes, Route } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Main } from "../components/Main";
import { About } from "../pages/About";
import { Catalago } from "../pages/Catalago";
import { Projetos } from "../pages/Projetos";

export const Router = () =>{
    return(
        <Routes>
            <Route path="/" element={<Layout/>}>
            {/*Index indica a rota padrao */}
            <Route index element={<Main/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/catalago" element={<Catalago/>}/>
            <Route path="/projetos" element={<Projetos/>}/>




            </Route> 

        </Routes>
    )
}