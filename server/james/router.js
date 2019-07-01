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

routes.post('/login', (req,res)=> {
	const { userEmail , userPassword } = req.body
	Fetch.findOne({ userEmail })
	.exec((err, docs)=> {
		if (err) {
			//network error
			res.send({system: 'login fail'})
		} else {
			if (!docs) {
				//id not found
				res.send({system: 'login fail'})
			}
			if (docs.userPassword === userPassword) {
				//sucess!!!
				res.send({system: 'login success', docs: docs}) // an object
			} else {
				//pw not match
				res.send({system: 'login fail'}) // an object
			}
		}
	})
})

routes.post('/register', async (req,res)=> {
	const { userName, userEmail, userPassword } = req.body
	try{
		let docs = await Fetch.create({ userName, userEmail, userPassword })
		if (docs.userName) {
			res.send({system: 'register success', docs})
		} else {
			res.send({system: 'register fail'})
		}
	} catch(e) {
		res.send({system: 'register fail'})
	}
})

routes.post('/firebaseAuth', async (req,res)=> {
	const { editedName, email } = req.body
	try{
		let docs = await Fetch.findOneAndUpdate(
			{
				userEmail: email
			}, 
			{
				userEmail: email, 
				userName: editedName,
				userPassword: 'firebase'
			},
			{
				new : true,
				upsert : true,
			})
		console.log("query result =>>>", docs)
		res.send({system: 'login success', docs})
	}catch(e){
		res.send({system: 'login failed'})
	}
})


module.exports = routes
