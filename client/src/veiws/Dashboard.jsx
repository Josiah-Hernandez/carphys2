import React, {useEffect, useState} from 'react'
import axios from "axios"
import {Link} from "react-router-dom"

const Dashboard = () => {
    const [vehicleList, setVehicleList] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/vehicles`)
        .then(res=>setVehicleList(res.data))
        .catch(err=>console.log(err))
    },[])
    return (
    <div>
        <Link to="/vehicles/new">New Vehicle</Link>|
        <Link to="/vehicles/profile">My Vehicles</Link>
        <table>
            <thead>
                <tr>
                    <th>Vehicle Make</th>
                    <th>Vehicle Model</th>
                </tr>
            </thead>
                    <tbody>
            {
                vehicleList.map((eachVehicle, i)=>{
                return(
                    <tr key={i}>
                        <td>{eachVehicle.vehicleName}</td>
                        <td><img src={eachVehicle.vehicleImage} alt="vehicle image"/></td>
                        <td><Link to={`/vehicles/${eachVehicle._id}`}>View Vehicle</Link></td>
                        <td><Link to={`/vehicles/${eachVehicle._id}/edit`}>Edit</Link></td>
                    </tr>
                )    
                })
            }
        </tbody>
        </table>

    </div>

    
    )
}

export default Dashboard