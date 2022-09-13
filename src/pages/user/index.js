import React from "react";
import './style.css';

export default function User(){
    return(
        <div id="user-container">
            <h1>Lista de Usuários</h1>
            <ul className="user-list">
                <li>
                    <strong>Nome</strong>
                    <p>nome</p>
                    <strong>Email</strong>
                    <p>email</p>
                    <strong>Idade</strong>
                    <p>20</p>
                    <strong>Empresa</strong>
                    <p>UESB</p>
                </li>
            </ul>
        </div>
    );
}