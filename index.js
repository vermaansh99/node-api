const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.send("Hello Ansh")
})


const PORT = 8080


app.listen(PORT,()=>{
    console.log(`Server is running up & ready ${PORT}`)
})