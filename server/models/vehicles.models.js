const mongoose = require('mongoose')

const VehicleSchema = new mongoose.Schema({
    vehicleImage: {
        type: String,
        required : [true, "Vehicle Must Contain A Image"]
    },
    vehicleMake: {
        type: String,
        required : [true, "Vehicle Must Contain A Make"]
    },
    vehicleModel: {
        type: String,
        required : [true, "Vehicle Must Contain A Model"]
    },
    vehicleYear: {
        type: Number,
        required : [true, "Vehicle Must Have A Year"]
    },
    vehicleEngine: {
        type: String,
        required : [true, "Vehicle Must Have A Engine"]
    },
    automatic: {
        type: Boolean
    },
    manual: {
        type: Boolean
    },
    twoWheelDrive: {
        type: Boolean
    },
    fourWheelDrive: {
        type: Boolean
    }
}, {timestamps: true})



module.exports.Vehicle = mongoose.model('Vehicle', VehicleSchema)