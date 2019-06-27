const faker = require('faker');

const db = require('./index.js');
const Fetch = require('./models.js');

const pics = [
  'https://mvp-fetch-app.s3-us-west-1.amazonaws.com/Dog+Pictures/beagle.jpg',
  'https://mvp-fetch-app.s3-us-west-1.amazonaws.com/Dog+Pictures/chowcow.jpg',
  'https://mvp-fetch-app.s3-us-west-1.amazonaws.com/Dog+Pictures/corgi.jpg',
  'https://mvp-fetch-app.s3-us-west-1.amazonaws.com/Dog+Pictures/germanshepherd.jpg',
  'https://mvp-fetch-app.s3-us-west-1.amazonaws.com/Dog+Pictures/goldenR.jpg',
  'https://mvp-fetch-app.s3-us-west-1.amazonaws.com/Dog+Pictures/goldenretrieversheperd.jpg',
  'https://mvp-fetch-app.s3-us-west-1.amazonaws.com/Dog+Pictures/pitbull.jpg',
  'https://mvp-fetch-app.s3-us-west-1.amazonaws.com/Dog+Pictures/popeye.jpg',
  'https://mvp-fetch-app.s3-us-west-1.amazonaws.com/Dog+Pictures/shiba-inu-corgi-mix.jpg',
  'https://mvp-fetch-app.s3-us-west-1.amazonaws.com/Dog+Pictures/shiba.jpg',
  'https://mvp-fetch-app.s3-us-west-1.amazonaws.com/Dog+Pictures/siberian-husky-price.jpg',
  'https://mvp-fetch-app.s3-us-west-1.amazonaws.com/Dog+Pictures/chowcow.jpg',
  'https://mvp-fetch-app.s3-us-west-1.amazonaws.com/Dog+Pictures/corgi.jpg',
  'https://mvp-fetch-app.s3-us-west-1.amazonaws.com/Dog+Pictures/germanshepherd.jpg',
  'https://mvp-fetch-app.s3-us-west-1.amazonaws.com/Dog+Pictures/goldenR.jpg',
  'https://mvp-fetch-app.s3-us-west-1.amazonaws.com/Dog+Pictures/goldenretrieversheperd.jpg',
  'https://mvp-fetch-app.s3-us-west-1.amazonaws.com/Dog+Pictures/pitbull.jpg',
  'https://mvp-fetch-app.s3-us-west-1.amazonaws.com/Dog+Pictures/popeye.jpg',
  'https://mvp-fetch-app.s3-us-west-1.amazonaws.com/Dog+Pictures/shiba-inu-corgi-mix.jpg',
  'https://mvp-fetch-app.s3-us-west-1.amazonaws.com/Dog+Pictures/shiba.jpg',
  'https://mvp-fetch-app.s3-us-west-1.amazonaws.com/Dog+Pictures/siberian-husky-price.jpg'
];

let matchesGen = i => {
  let samples =
    i % 2 === 0
      ? [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
      : [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
  let a = Math.floor(Math.random() * 10);
  let b = Math.floor(Math.random() * 10);
  let c = Math.floor(Math.random() * 10);
  let d = Math.floor(Math.random() * 10);
  return [...new Set([samples[a], samples[b], samples[c], samples[d]])];
};

const animalSizeGenerator = () => {
  let size = ['Small', 'Medium', 'Large'];
  let random = Math.floor(Math.random() * 3);

  return size[random];
};
let container = [];
const dataGenerator = () => {
  for (let i = 0; i < 20; i++) {
    let oneDoc = {
      id: i,
      userName: faker.name.firstName(),
      userPassword: faker.internet.password(),
      userEmail: faker.internet.email(),
      userLocation: faker.address.zipCode(),
      userSettingMiles: i % 2 ? 10 : 5,
      preferences: [],
        // i % 2 === 0
        //   ? [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
        //   : [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      // matches: matchesGen(i),
      matches: [],
      images: [pics[i], pics[Math.floor(Math.random()*20)], pics[Math.floor(Math.random()*20)]],
      animalGender: i % 2 === 0 ? true : false,
      description: faker.lorem.sentence(),
      animalSize: animalSizeGenerator()
    };
    container.push(oneDoc);
  }
  return container;
};
console.log(dataGenerator());

const insertSeedData = () => {
  Fetch.insertMany(container)
    .then(() => console.log('success'))
    .catch(() => console.log('error'));
};
insertSeedData();
