import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
// import { useHistory } from 'react-router-dom'
//useHistory
const Login = () => {
    // const history = useHistory()
    const [user, setUser] = useState({
        email: "",
        password: "",
    })

    const changeHandle = (e) => {
        let { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const navigate = useNavigate()
    const submitHandle = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8000/api/login`, user, { withCredentials: true })
            .then(res => navigate('/dashboard'))
            .catch(err => console.log(err.response))
    }


    return (
        <div>
            <form onSubmit={submitHandle}>
                <div>
                    <label>Email</label>
                    <input type="text" name="email" value={user.email} onChange={changeHandle} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={user.password} onChange={changeHandle} />
                </div>
                <button> Login </button>
            </form>
        </div>
    )
}

export default Login
