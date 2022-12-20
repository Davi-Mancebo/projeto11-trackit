import React, { useState } from "react";
import { GeralLogin } from "../assets/css/style";
import logo from '../assets/img/Logo.png'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Cadastro(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');
    const [foto, setFoto] = useState('')

    const navigate = useNavigate()

    

    function cadastro(){
        const dados = 
        {
            email: email,
            name: nome,
            image: foto,
            password: senha
        }
        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up"


        if(email === ""){
            alert("Email enviado incorretamente, insira novamente!")
            setEmail('')
        }
        else if(senha === ""){
            alert("Senha enviada incorretamente, insira novamente!")
            setSenha('')
        }
        else if(nome === ""){
            alert("Nome enviado incorretamente, insira novamente!")
            setNome('')
        }
        else if(foto === ""){
            alert("Foto enviado incorretamente, insira novamente!")
            setFoto('')        
        }
        else{
            console.log(dados)

            axios.post(url, dados)
            .then(() => navigate("/"))
        }


    }

    return(
        <GeralLogin>
            <img src={logo}/>

            <input 
                placeholder="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <input
                placeholder="senha"
                value={senha}
                onChange={s  => setSenha(s.target.value)}
                type="password"
            />
            <input
                placeholder="nome"
                value={nome}
                onChange={n => setNome(n.target.value)}
            />
            <input
                placeholder="foto"
                value={foto}
                onChange={f => setFoto(f.target.value)}
            />
            <button onClick={cadastro}>Cadastrar</button>

            <Link to='/'>
                <p>Já tem uma conta? Faça Login!</p>
            </Link>
        </GeralLogin>
    )
}