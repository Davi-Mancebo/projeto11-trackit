import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./login";
import Cadastro from "./cadastro";
import Habitos from "./habitos";
import Hoje from "./hoje"
import Historico from "./historico"
import { AuthContext } from "./provider";

export default function App(){
    const user = React.useContext(AuthContext)

    console.log(user)
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/cadastro" element={<Cadastro />}/>
                <Route path="/habitos" element={<Habitos/>}/>
                <Route path="/hoje" element={<Hoje/>} />
                <Route path="/historico" element={<Historico/>}/>
            </Routes>
        </BrowserRouter>
    )
}