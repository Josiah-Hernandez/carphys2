import axios from 'axios'
import React, { useState } from 'react'

const FetchAllVehicles = () => {
    const [allVehicles, setAllVehicles] = useState([])
    const fetchVehicles = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=800&offset=0`)
            .then(response => {
                return response.json([])
            })
            .then(jsonResponse => {
                console.log(jsonResponse.results)
                setAllVehicles(jsonResponse.results)
            })
            .catch(err => console.log(err))
    }

    // const fetchVehiclesWithAxios = () => {
    //     axios.get(`https://pokeapi.co/api/v2/pokemon?limit=800&offset=0`)
    //     .then(response => setAllVehicles(response.data.results))
    //     .catch(err=> console.log(err))
    // }

    return (
        <div>
            <button onClick={fetchVehicles}> Get All Vehicles </button>
            <button onClick={fetchVehiclesWithAxios}>Axios Fetch All Vehicles</button>

            {
                allVehicles.map((p, i) => {
                    return (
                        <h3 key={i}>{p.name}</h3>
                    )
                })
            }

        </div>
    )
}

export default FetchAllVehicles