const express = require('express')
const PORT = process.env.PORT || 3001
require('dotenv').config()
const connectDB = require('./config/db')
const cors = require('cors')

const authRoutes = require('./Routes/authRoutes')
const adminRoutes =  require('./Routes/adminRoutes')
connectDB()
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/auth',authRoutes)
app.use('/admin',adminRoutes)



app.listen(PORT, () => {
    console.log(`Server Port: ${PORT}`)
    //  connectDataBase()
})