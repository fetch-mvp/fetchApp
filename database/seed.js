const faker = require('faker');

const db = require('./index.js');
const Fetch = require('./models.js');

const pics = [
  "https://mvp-fetch-app.s3-us-west-1.amazonaws.com/Dog+Pictures/beagle.jpg",
  "https://mvp-fetch-app.s3-us-west-1.amazonaws.com/Dog+Pictures/chowcow.jpg",
  "https://mvp-fetch-app.s3-us-west-1.amazonaws.com/Dog+Pictures/corgi.jpg",
  "https://mvp-fetch-app.s3-us-west-1.amazonaws.com/Dog+Pictures/germanshepherd.jpg",
  "https://mvp-fetch-app.s3-us-west-1.amazonaws.com/Dog+Pictures/goldenR.jpg",
  "https://mvp-fetch-app.s3-us-west-1.amazonaws.com/Dog+Pictures/goldenretrieversheperd.jpg",
  "https://mvp-fetch-app.s3-us-west-1.amazonaws.com/Dog+Pictures/pitbull.jpg",
  "https://mvp-fetch-app.s3-us-west-1.amazonaws.com/Dog+Pictures/popeye.jpg",
  "https://mvp-fetch-app.s3-us-west-1.amazonaws.com/Dog+Pictures/shiba-inu-corgi-mix.jpg",
  "https://mvp-fetch-app.s3-us-west-1.amazonaws.com/Dog+Pictures/shiba.jpg",
  "https://mvp-fetch-app.s3-us-west-1.amazonaws.com/Dog+Pictures/siberian-husky-price.jpg",
  "https://mvp-fetch-app.s3-us-west-1.amazonaws.com/Dog+Pictures/chowcow.jpg",
  "https://mvp-fetch-app.s3-us-west-1.amazonaws.com/Dog+Pictures/corgi.jpg",
  "https://mvp-fetch-app.s3-us-west-1.amazonaws.com/Dog+Pictures/germanshepherd.jpg",
  "https://mvp-fetch-app.s3-us-west-1.amazonaws.com/Dog+Pictures/goldenR.jpg",
  "https://mvp-fetch-app.s3-us-west-1.amazonaws.com/Dog+Pictures/goldenretrieversheperd.jpg",
  "https://mvp-fetch-app.s3-us-west-1.amazonaws.com/Dog+Pictures/pitbull.jpg",
  "https://mvp-fetch-app.s3-us-west-1.amazonaws.com/Dog+Pictures/popeye.jpg",
  "https://mvp-fetch-app.s3-us-west-1.amazonaws.com/Dog+Pictures/shiba-inu-corgi-mix.jpg",
  "https://mvp-fetch-app.s3-us-west-1.amazonaws.com/Dog+Pictures/shiba.jpg",
  "https://mvp-fetch-app.s3-us-west-1.amazonaws.com/Dog+Pictures/siberian-husky-price.jpg"
];

let container = []
const dataGenerator = () => {
  for (let i = 0; i < 20; i++) {
    let oneDoc = {
      id: i,
      userName: faker.name.firstName(),
      userPassword: faker.internet.password(),
      userEmail: faker.internet.email(),
      userLocation: faker.address.zipCode(),
      userSettingMiles: (i % 2) ? 10 : 5,
      images: [pics[i]],
      animalGender: (i % 2) ? true : false
    }
    container.push(oneDoc)
  }
}
dataGenerator()

const insertSeedData = () => {
  Fetch.insertMany(container)
  .then(()=> console.log("success"))
  .catch(()=> console.log("error"))
}
insertSeedData()