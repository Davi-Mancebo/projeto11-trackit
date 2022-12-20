import React, { useContext, useEffect, useState } from "react";
import { Geral, HabitoDia } from "../assets/css/style";
import Base from "./bottom";
import Cabecalho from "./cabecalho";
import axios from "axios";
import { AuthContext } from "./provider";
import AllHabits from "./allHabits";


export default function Hoje({usuario}){
    const newDate = new Date()
    const [habitos, setHabitos] = useState([])
    const user = useContext(AuthContext)

    const [msg, setMsg] = useState("Você não tem nenhuma hábito para hoje!")

    const config = { 
        headers: {
            Authorization: 'Bearer ' + user.usuario.token
        }
    }

    let dia = ""

    if(newDate.getDay() === 0){
        dia = 'Domingo'
    }
    else if(newDate.getDay() === 1){
        dia =  'Segunda'
    }
    else if(newDate.getDay() === 2){
        dia = 'Terça' 
    }
    else if(newDate.getDay() === 3){
        dia = 'Quarta'
    }
    else if(newDate.getDay() === 4){
        dia = 'Quinta' 
    }
    else if(newDate.getDay() === 5){
        dia = 'Sexta'
    }
    else if(newDate.getDay() === 6){
        dia = 'Sábado'
    }

    useEffect(() => {
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config)
        promise.then((crr) => {
            setHabitos(...habitos, crr.data)
        })
    }, [])

    if(habitos.length > 0){
        setMsg(`Nenhum Hábito concluido ainda!`)
    }

    return(
        <Geral>
            <Cabecalho/>
            <h1>{dia}, {newDate.getDate()}/{newDate.getMonth() +1}</h1>
            <h2>{msg}</h2>
            <Base/>

            {habitos.map((h) => <TodayHabits atual={h.currentSequenc}  maior={h.highestSequence} name={h.name} id={h.id} concluido={h.done}/>)}
        </Geral>
    )
}
function TodayHabits(props){
    return(
        <HabitoDia>
            <div className="dados">
                <h1>{props.name}</h1>
                <p>Sequencia atual: {props.atual}</p>
                <p>Sequencia maior:  {props.maior}</p>
            </div>
        </HabitoDia>
    )
}