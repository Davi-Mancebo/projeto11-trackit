import axios from "axios";
import { config } from "localforage";
import React, { useEffect, useState } from "react";
import { Habito } from "../assets/css/style";
import { AuthContext } from "./provider";

export default function AllHabits(){
    const user = React.useContext(AuthContext)

    const [habitos, setHabitos] = useState([])

    const config = {
        headers: {
            Authorization: 'Bearer ' + user.usuario.token
        }
    }

    useEffect(() => {
    const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config)
    promise.then((crr) => {
        setHabitos(...habitos, crr.data)
    })}, [])

    if(habitos.length > 0){
        return(
            habitos.map((c) => <Showhabits tarefa={c.name} id = {c.id} dias={c.days}/>)
        )
    }
    return(
        <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
    )

}

function Showhabits(props){
    return(
        <Habito>
            <h4>{props.tarefa}</h4>
            <div className="botoes">
                <button>D</button>
                <button>S</button>
                <button>T</button>
                <button>Q</button>
                <button>Q</button>
                <button>S</button>
                <button>S</button>
                <button>D</button>
            </div>
        </Habito>
    )
}