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
    type: String,
    unique: true
  },
  userLocation: {
    type: String //zipcode
  },
  maxDistance: {
    type: Number,
    default: () => {
      return 100;
    }
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
  swiped: [],
  preferredGender: {
    type: String,
    default: () => {
      return "No preference";
    }
  },
  preferredSize: {
    type: String,
    default: () => {
      return "No preference";
    }
  }

});

const Fetch = mongoose.model('fetchs', FetchSchema);
module.exports = Fetch;
