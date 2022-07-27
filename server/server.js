
const express = require("express")
const app = express()

const cors = require ("cors")



require('./configs/mongoose.config')



app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(cors())


//uncommenting out didnt work first time worked second time
require('./routes/vehicles.routes')(app)


app.listen(8000, ()=>console.log("listening to the port 8000"))