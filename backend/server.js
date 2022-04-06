//dotenv
require('dotenv').config()
//connect DB
const { connectDB } = require('./configs/db')

const express = require('express')
const app = express()

const path = require('path');
const mongoose = require('mongoose')
const cors = require('cors')
app.use(express.json())
app.use(cors())

//app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
global.__path_upload = __dirname + '/public/uploads'
//global.__path_upload = __dirname + '/public/backend/upload'
// router
const authRoute = require('./routes/auth')
const categoryRoute = require('./routes/category')
const postRoute = require('./routes/post')
const sliderRoute = require('./routes/slider')

// mount the route
app.use('/api/auth', authRoute)
app.use('/api/category', categoryRoute)
app.use('/api/post', postRoute)
app.use('/api/slider', sliderRoute)



/*
// error Handler
const {errorHandler} = require('./middlewares/errorHandler')
// define Router
const authRoute = require('./routes/auth')
const categoryRoute = require('./routes/category')
const postRoute = require('./routes/post')


// mount the route
app.use('/api/auth/',authRoute)
app.use('/api/category/',categoryRoute)
app.use('/api/post/',postRoute)

// Handle route not found
app.all('*', (req,res,next) =>{
    const err = new Error('The route can not be found...')
    err.statusCode = 404
    next(err)
})
app.use(errorHandler)

 
*/

/*
// connect trực tiếp ngoài này
//const port = process.env.APP_PORT
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('DB Connected. !!!');
        // -------------------------------
        app.listen(port, () => {
           console.log(`Server is running on port ${port}`);
        })
        // -------------------------------
    })
    .catch(error => {
        console.log('Error Connect: ' + error.message);
        process.exit(1);
    })

    */
// connect DB
connectDB()


const port = process.env.APP_PORT || 5000
app.listen(port, () => { console.log(`Server is running on port ${port}`); }) 