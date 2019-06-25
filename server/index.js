const db = require('../database/index')
const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3000

const calvinRouter = require('./calvin/router.js')
const gabiRouter = require('./gabi/router.js')
const jamesRouter = require('./james/router.js')
const wendyRouter = require('./wendy/router.js')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//testing purpose
app.get('/', (req,res)=> {
	res.send("Welcome! This is Time-Sponsored section")
})

//independent routers for each person
app.use('/api/calvin', calvinRouter)
app.use('/api/gabi', gabiRouter)
app.use('/api/james', jamesRouter)
app.use('/api/wendy', wendyRouter)

//listening on 3000
app.listen(PORT, ()=> console.log("Server is up and running on ", PORT))



