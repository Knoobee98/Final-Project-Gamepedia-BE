const express = require('express')
const app = express()
const port = 4000
app.use(express.json())



app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})