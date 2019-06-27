const routes = require('express').Router()
const Fetch = require('../../database/models')

routes.get('/getone', (req,res)=> {
	// const { id } = req.query { "id": Number(id) }
	Fetch.findOne({'id': randomNumber}).exec((err, docs)=> {
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
	})
})

module.exports = routes