import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Edit = () => {
    const [vehicleImage, setVehicleImage] = useState("")
    const [vehicleMake, setVehicleMake] = useState("")
    const [vehicleModel, setVehicleModel] = useState("")
    const [vehicleYear, setVehicleYear] = useState(2000)
    const [vehicleEngine, setVehicleEngine] = useState("")
    const [automatic, setAutomatic] = useState(false)
    const [manual, setManual] = useState(false)
    const [twoWheelDrive, setTwoWheelDrive] = useState(false)
    const [fourWheelDrive, setFourWheelDrive] = useState(false)

    const [errors, setErrors] = useState([])

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8000/api/vehicles`, { vehicleImage, vehicleMake, vehicleModel, vehicleYear, vehicleEngine, automatic, manual, twoWheelDrive, fourWheelDrive })
            .then(res => navigate("/edit"))
            .catch(err => {
                const errResponse = err.response.data.errors
                const tempErrArr = []
                for (const eachKey in errResponse) {
                    tempErrArr.push(errResponse[eachKey].message)
                }
                setErrors(tempErrArr)
            })
    }




    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Vehicle Image:</label>
                        <input type="text" name="vehicleImage" value={vehicleImage} onChange={(e) => setVehicleImage(e.target.value)} />
                    </div>
                    <div>
                        <label>Vehicle Make:</label>
                        <input type="text" name="vehicleMake" value={vehicleMake} onChange={(e) => setVehicleMake(e.target.value)} />
                    </div>
                    <div>
                        <label>Vehicle Model:</label>
                        <input type="text" name="vehicleModel" value={vehicleModel} onChange={(e) => setVehicleModel(e.target.value)} />
                    </div>
                    <div>
                        <label>Vehicle Year:</label>
                        <input type="number" name="vehicleYear" value={vehicleYear} onChange={(e) => setVehicleYear(e.target.value)} />
                    </div>
                    <div>
                        <label>Vehicle Engine:</label>
                        <input type="text" name="vehicleEngine" value={vehicleEngine} onChange={(e) => setVehicleEngine(e.target.value)} />
                    </div>
                    <div>
                        <label>Automatic</label>
                        <input type="checkbox" name="automatic" checked={automatic} onChange={(e) => setAutomatic(e.target.checked)} />
                    </div>
                    <div>
                        <label>Manual</label>
                        <input type="checkbox" name="manual" checked={manual} onChange={(e) => setManual(e.target.checked)} />
                    </div>
                    <div>
                        <label>Two Wheel Drive</label>
                        <input type="checkbox" name="twoWheelDrive" checked={twoWheelDrive} onChange={(e) => setTwoWheelDrive(e.target.checked)} />
                    </div>
                    <div>
                        <label>Four Wheel Drive</label>
                        <input type="checkbox" name="fourWheelDrive" checked={fourWheelDrive} onChange={(e) => setFourWheelDrive(e.target.checked)} />
                    </div>
                    <button type="submit">Add Vehicle</button>
                </form>
                {
                    errors.map((err, i) => {
                        return (
                            <p>{err}</p>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Edit