const {Vehicle} = require('../models/vehicles.models')


//Get all
module.exports.allVehicles = (req, res)=>{
    Vehicle.find()
        .then(vehicles => res.json(vehicles))
        .catch(err=> res.status(400).json(err))
}
//Get one
module.exports.oneVehicle = (req, res)=>{
    Vehicle.findOne({_id: req.params.id})
        .then(oneVehicle => res.json(oneVehicle))
        .catch(err=> res.status(400).json(err))
    }
//Create
module.exports.createVehicle = (req, res)=>{
    const newVehicle = req.body
    Vehicle.create(newVehicle)
        .then(vehicle => res.json(vehicle))
        .catch(err => res.status(400).json(err))
}
//Delete
module.exports.deleteVehicle = (req, res)=>{
    Vehicle.deleteOne({_id : req.params.id})
    .then(message=>res.json(message))
    .catch(err => res.status(400).json(err))
    }