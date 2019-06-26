const routes = require('express').Router();
const Fetch = require('../../database/models');
const ObjectID = require('mongodb').ObjectID;

//Routers
routes.get('/', (req, res) => {
  const { id } = req.query;
  Fetch.findOne({ id: Number(id) }).exec((err, docs) => {
    if (err) {
      res.send('error');
    } else {
      res.send(docs); // an object
    }
  });
});

routes.put('/api/:_id', (req, res) => {
  let {
    username,
    password,
    email,
    preferences,
    matches,
    images,
    animaltype,
    animalgender,
    animalbreed,
    description,
    location
  } = req.body;
  let { _id } = req.params;

  Fetch.updateOne(
    { _id: new ObjectID(_id) },
    { $set: { images, description } },
    (err, data) => {
      if (err) {
        res.status(404).send(err);
      } else {
        Fetch.findOne({ _id: new ObjectID(_id) }, (err, info) => {
          res.status(200).send(info);
        });
      }
    }
  );
});
module.exports = routes;
