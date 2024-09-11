import express from 'express';
import bodyParser from 'body-parser'

import userRoutes from './routes/users.js'


const app = express()
const port = 5000

app.get("/",(req,res) =>{
    console.log('[GET ROUTE]')
    res.send("hello !!!!!")
})

//Adding bodyparser for json
app.use(bodyParser.json())

//this is dummy API
app.get("/api/v1",(req,res) => {
    console.log('[IN API ROUTE]')
    res.json(
        {
            message:"hello from API v1"
        }
    )
})

app.use('/users',userRoutes)

app.listen(port,() =>{
    console.log(`my app is opened in port : ${port}`)
})