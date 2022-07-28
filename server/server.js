const myFirstSecret = process.env.FIRST_SECRET_KEY;
const express = require("express")
const app = express()
const cookieParser = require('cookie-parser');

const cors = require ("cors")




require('dotenv').config();
require('./configs/mongoose.config')



app.use(cors({
    credentials: true, 
    origin: 'http://localhost:3000'
}));
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser());



//uncommenting out didnt work first time worked second time
require('./routes/vehicles.routes')(app)
require('./routes/user.routes')(app)

app.listen(8000, ()=>console.log("listening to the port 8000"))