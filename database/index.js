const mongoose = require('mongoose')

let DB_URL1 = "mongodb://127.0.0.1:27017/fetchDB"
let DB_URL2 = "mongodb+srv://hackreactortest:hackreactortest@cluster0-7iwj5.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(DB_URL2, {
	useNewUrlParser: true,
	useCreateIndex: true,
    useFindAndModify: false
})

const db = mongoose.connection
db.once('open', () => console.log("\nMongoose is up and running on 27017\n"));

module.exports = db