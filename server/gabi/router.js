const routes = require('express').Router()
const Fetch = require('../../database/models')

routes.get('/', (req,res)=> {
	const { id } = req.query
	Fetch.findOne({ "id": Number(id) })
	.exec((err, docs)=> {
		if (err) {
			res.send("error")
		} else {
			res.send(docs) // an object
		}
	})
})

module.exports = routes