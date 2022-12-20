import axios from "axios";
import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { GeralLogin } from "../assets/css/style"
import logo from '../assets/img/Logo.png'
import { AuthContext } from "./provider";

export default function Login({setUsuario}){
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("")

    const url ="https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"

    const user = React.useContext(AuthContext)

    const navigate = useNavigate()
    function login(){
        const dados = 
        {
            email: email,
            password: senha
        }

        if(email === "" || senha === ""){
            alert("dados inseridos incorretamente! por favor digite novamente!")
        }else{
            const promise = axios.post(url, dados)
            promise.then((crr) => {
                user.setUsuario(crr.data)
                console.log(user.usuario)
                navigate("/habitos")
            })
            promise.catch(err => console.log(err.data.response))
        }
    }
    return(
        <GeralLogin>
            <img src={logo}/>

            <input 
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                placeholder="senha"
                value={senha}
                onChange={(s) => setSenha(s.target.value)}
                type="password"
            />
            <button onClick={login}>Entrar</button>

            <Link to='/cadastro' onClick={() => {
                setSenha("")
            }} >
                <p>Não tem uma conta? cadastre-se!</p>
            </Link>
        </GeralLogin>
    )
}