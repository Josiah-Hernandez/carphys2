import React from 'react'
import Dashboard from './Dashboard'
import { Link } from "react-router-dom"
import { useState } from 'react'

const Details = () => {
    const [vehicleList] = useState([])
    return (
        <div>
            <Link to="/Dashboard"> Home</Link>|
            <Link to="/Edit"> Edit</Link>|
            <button > Log out</button>



        </div>
    )
}

export default Details