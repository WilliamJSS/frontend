import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import api from '../../services/api'
import './style.css'

export default function User() {

    const [users, setUsers] = useState([])
    useEffect(() => {
        api.get('users').then(response => {
            setUsers(response.data)
        })
    }, [])

    return (
        <div id="user-container">
            <h1>Lista de Usuários</h1>
            <Link className="button" id="create-link" to={"/create"}>Criar</Link>
            <ul className="user-list">
                {users.map(user => (
                    <li key={user.id}>
                        <strong>Nome</strong>
                        <p>{user.name}</p>
                        <strong>Email</strong>
                        <p>{user.email}</p>
                        <strong>Idade</strong>
                        <p>{user.idade}</p>
                        <strong>Empresa</strong>
                        <p>{user.empresa}</p>

                        <div className='actions'>
                            <button className="button" type="button">Deletar</button>
                            <Link className="button" to={`/update/${user.id}`}>Acessar</Link>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}