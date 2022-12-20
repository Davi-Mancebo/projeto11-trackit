import React, { useState } from "react"
import { Geral, Habits, Add } from "../assets/css/style"
import AllHabits from "./allHabits"
import Base from "./bottom"
import Cabecalho from "./cabecalho"
import { AuthContext } from "./provider"
import axios from "axios"

export default function Habitos({usuario}){
    const [display, setDisplay] = useState(false)
    const [nome, setNome] = useState('')
    const [dias, setDias] = useState([])

    const user = React.useContext(AuthContext)


    const config = {
        
        headers: {
            Authorization: 'Bearer ' + user.usuario.token
        }
    }


    function enviar(){
        console.log(dias)

        setDisplay(false)
        const dados = 
            {
                name: nome,
                days: dias // segunda, quarta e sexta
            }

        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', dados, config)
        .then(console.log("enviado com sucesso"))
        .catch(err => console.log(err.response.data))
    }

    return(
        <Geral>
            <Cabecalho/>

            <Habits>
                <h3>Meus hábitos</h3>
                <div onClick={() => setDisplay(true)}>+</div>
            </Habits>
            { display &&
                <Add>
                    <input
                        placeholder="nome do hábito"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                    <div className="botoes">
                        <button onClick={() => setDias([...dias, 0])}>D</button>
                        <button onClick={() => setDias([...dias, 1])}>S</button>
                        <button onClick={() => setDias([...dias, 2])}>T</button>
                        <button onClick={() => setDias([...dias, 3])}>Q</button>
                        <button onClick={() => setDias([...dias, 4])}>Q</button>
                        <button onClick={() => setDias([...dias, 5])}>S</button>
                        <button onClick={() => setDias([...dias, 6])}>S</button>
                    </div>

                    <div className="finalizar">
                        <p onClick={() => {
                            setNome("")
                            setDias([])
                            setDisplay(false)
                        }}>cancelar</p>
                        <button onClick={enviar}>Salvar</button>
                    </div>
                </Add>
            }
            <AllHabits />
            <Base />
        </Geral>
    )
}