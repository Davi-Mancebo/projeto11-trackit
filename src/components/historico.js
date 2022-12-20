import React from "react"
import { Geral, Top } from "../assets/css/style"
import Base from "./bottom"
import Cabecalho from "./cabecalho"

export default function Historico({usuario}){
    return(
        <Geral>
            <Cabecalho/>

            <h1>Histórico</h1>
            <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            
            <Base />
        </Geral>
    )

}