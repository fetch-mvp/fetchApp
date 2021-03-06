const routes = require('express').Router()
const Fetch = require('../../database/models')


routes.get('/getone/:id', (req,res)=> {
	// let randomNumber = Math.floor(Math.random() * 11)
	// const { id } = req.query { "id": Number(id) }
	const {id} = req.params;
	Fetch.findOne({id}).exec((err, docs)=> {
		if (err) {
			res.status(404).send(err)
		} else {
			res.status(200).send(docs) // an object
		}
	})
})

routes.get('/getall', (req, res) => {
	Fetch.find({}).exec((err, docs) => {
		if(err) {
			res.status(404).send(err)
		} else {
			res.status(200).send(docs)
		}
		//hello
	})
})

routes.put('/update/:id', (req, res) => {
	let {maxDistance, preferredGender, preferredSize} = req.body;
	let {id} = req.params;

	Fetch.findOneAndUpdate({id: Number(id)}, {$set: {maxDistance, preferredGender, preferredSize}}).exec((err, docs) => {
		if (err) {
			console.log("mongo db error : " , err)
			res.status(404).send(err)
		} else {
			console.log("mongo db docs : ", docs)
			res.status(200).send('profile updated')
		}
	})
})

module.exports = routes