import React from "react";
import axios from "axios"
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    //changeHandle
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
        axios.post(`http://localhost:8000/api/register`, user, { withCredentials: true })
            .then(res => navigate(`/dashboard/${res.data._id}`))
            .catch(err => console.log(err.response))
    }


    return (
        <div>
            <form onSubmit={submitHandle}>
                <div>
                    <label>Firstname</label>
                    <input type="text" name="firstName" value={user.firstName} onChange={changeHandle} />
                </div>
                <div>
                    <label>Lastname</label>
                    <input type="text" name="lastName" value={user.lastName} onChange={changeHandle} />
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" name="email" value={user.email} onChange={changeHandle} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={user.password} onChange={changeHandle} />
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input type="password" name="confirmPassword" value={user.confirmPassword} onChange={changeHandle} />
                </div>
                <button> Register </button>
            </form>
        </div>
    )
}

export default Register
