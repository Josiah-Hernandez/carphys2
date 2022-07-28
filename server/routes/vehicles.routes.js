const { Vehicle } = require("../models/vehicles.models")
const VehiclesController = require("./../controller/vehicles.controller")

module.exports = (app) =>{

    app.get("/api/vehicles", VehiclesController.allVehicles)
    app.get("/api/vehicles/:id", VehiclesController.oneVehicle)
    app.post("/api/vehicles", VehiclesController.createVehicle)
    app.post("/api/vehicles/:id", VehiclesController.editVehicles)
    app.delete("/api/vehicles/:id", VehiclesController.deleteVehicle)
    app.get("/api/vehicles/:id", VehiclesController.reminderVehicle)
}