const cors = require('cors')
const express = require('express')
const app = express()
const axios = require('axios')

app.use(cors())

app.get('/', async(req, res) => {
    try {
        const {data} = await axios('http://ec2-15-228-162-229.sa-east-1.compute.amazonaws.com:3000/categoriasGetAll')
        console.log(data)
    
        return res.json(data)        
    } catch (error) {
        console.error(error)
    }
})

app.listen('4321')