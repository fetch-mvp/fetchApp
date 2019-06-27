const routes = require('express').Router()
const Fetch = require('../../database/models')
const ObjectID = require('mongodb').ObjectID;

//Routers

routes.get('/getAll', (req, res) => {
	Fetch.find({}).exec((err, docs) => {
		if(err) {
			res.status(404).send(err)
		} else {
			res.status(200).send(docs)
		}
	})
})

routes.put('/swiped', (req, res) => {
	let {currId, targetId} = req.body
	Fetch.update({ _id: currId }, { $push: {swiped: targetId} })
	.then(()=>res.status(201).send('success pushed swipe'))
	.catch((err)=>res.status(404).send(err))
})

module.exports = routes