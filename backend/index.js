const express = require ('express');
const authrouter = require('./routers/authrouter');
const cors = require("cors")

require('./config/database').connect()
const app = express()
app.use(express.json())
app.use(cors())

app.use(authrouter)
app.listen(8003,()=>{console.log('listening to port 8003')})