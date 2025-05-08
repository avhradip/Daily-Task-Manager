require('dotenv').config()
const express = require('express')
const appRouter = require('./src/routes/user')
const connectDB = require('./src/config/DB')
const PORT = 8080;
const app = express()
connectDB()

app.use(express.json())
app.use('/registration', appRouter)

app.get('/', (req, res) => {
    res.json({message:"surver is runing..."})
})

app.listen(process.env.PORT, () => {
    console.log(`surver is runing at port ${process.env.PORT}`);
    
})