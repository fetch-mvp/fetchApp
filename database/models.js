const mongoose = require('mongoose');

const FetchSchema = new mongoose.Schema({
  id: {
    type: Number
  },
  userName: {
    type: String
  },
  userPassword: {
    type: String
  },
  userEmail: {
    type: String
  },
  userLocation: {
    type: String //zipcode
  },
  userSettingMiles: {
    type: Number
  },
  description: {
    type: String
  },
  preferences: {
    type: [Number]
  },
  matches: {
    type: [Number]
  },
  images: {
    type: [String]
  },
  animalGender: {
    type: Boolean // ture for female, false for male
  },
  animalSize: {
    type: String // 'S', 'M', 'L'
  },
  swiped: []
});

const Fetch = mongoose.model('fetchs', FetchSchema);
module.exports = Fetch;
