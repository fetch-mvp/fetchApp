const routes = require('express').Router();
const Fetch = require('../../database/models');
const ObjectID = require('mongodb').ObjectID;

//Multer for Image Uploading
const multer = require('multer');

//Image Uploading Storage
const Storage = multer.diskStorage({
  destination(req, file, callback) {
    // console.log('==>', file);
    callback(null, './images');
  },
  filename(req, file, callback) {
    callback(null, `${file.fieldname}_${Date.now()}_${file.originalname}`);
  }
});

const upload = multer({ storage: Storage });

routes.post('/upload', upload.array('photo', 1), (req, res) => {
  let uri = req.body.photo._parts[0][1]; // {uri: link }
  let _id = req.body.photo._parts[1][1]; // id
  console.log('thisisisissi', req.body.photo._parts[1][1]); // gets ID
  res.status(200).json({
    message: 'success!'
  });
  Fetch.updateOne(
    { _id: new ObjectID(_id) },
    { $set: { uri } },
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

routes.put('/:_id', (req, res) => {
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

// let uri = eq.body.photo._parts[0][1]; // {uri: link }
// let _id = req.body.photo._parts[1][1]; // id
// console.log('thisisisissi', req.body.photo._parts[1][1]); // gets ID
// res.status(200).json({
//   message: 'success!'
// });
// Fetch.updateOne(
//   { _id: new ObjectID(_id) },
//   { $set: { uri } },
//   (err, data) => {
//     if (err) {
//       res.status(404).send(err);
//     } else {
//       Fetch.findOne({ _id: new ObjectID(_id) }, (err, info) => {
//         res.status(200).send(info);
//       });
//     }
//   }
// );
