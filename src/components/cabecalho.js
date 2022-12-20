import React from "react";
import teste from "../assets/img/teste.png"
import { Geral, Top } from "../assets/css/style";
import { AuthContext } from "./provider";

export default function Cabecalho(){
    const user = React.useContext(AuthContext)

    return(
        <Top>
            <h2>TrackIt</h2>
            <img src={user.usuario.image}/>
        </Top>
    )
}