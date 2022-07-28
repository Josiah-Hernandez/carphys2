import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"

const Profile = () => {
    const [reminderList, setReminderList, vehicleList] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`http://localhost:8000/api/vehicles`)
            .then(res => setReminderList(res.data))
            .catch(err => console.log(err))
    }, [])


    return (
        <div>
            <Link to="/Dashboard"> Home</Link>|
            <button type="button" className='btn btn-default' onClick={() => navigate("/")}> Logout</button>
            <h1>Calendar</h1>
            <form action="">
                <h2>Reminders</h2>
                <vehicleList />
            </form>
        </div>
    )
}


export default Profile