const express = require('express')
const app = express()
const port = 4000
app.use(express.json())
require('dotenv').config()
const cors = require('cors')
app.use(cors())

//router
const {admin_router} = require('./routers');
app.use('/admin', admin_router);

app.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}`)
})

// sequelize synchronous
const Sequelize = require('sequelize')
const Models = require('./models')

Models.sequelize.sync({
    force: false,
    alter: true,
    logging: console.log
}).then(function () {
    console.log('database is synchronized')
}).catch(function (error){
    console.log(error, 'something went wrong with the database')
})