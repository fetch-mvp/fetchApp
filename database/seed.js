const faker = require('faker');

const db = require('./index.js');
const Fetch = require('./models.js');

const pics = [
  'https://mvp-fetch-app.s3-us-west-1.amazonaws.com/Dog+Pictures/beagle.jpg',
  'https://avatars0.githubusercontent.com/u/43357768?s=400&v=4',
  'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/56828213_10156755263163800_2204893479413219328_n.jpg?_nc_cat=111&_nc_oc=AQn3abYwMRL7Sxw0OcYX3pHH98TA8X-I1QOwh5DLytw7-UUIDuaxvO2AIDn_5BKZyG8&_nc_ht=scontent-dfw5-1.xx&oh=5fd3b4ed5acd9c1cf9aebb078ec57944&oe=5DB85258',
  'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/56811450_10156755263133800_5823728100050993152_n.jpg?_nc_cat=108&_nc_oc=AQlz0KIZ5xz7MuYhX0som-mj8aBLdv3XjcRDDI2g8basrBe8Vj9IIJsQNvSwLfyZP4k&_nc_ht=scontent-dfw5-1.xx&oh=cbeaf7938fca28075dc3a686ac344eb6&oe=5D7D651E',
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

const zipCodes = [
  "90001",
  "90002",
  "90003",
  "90004",
  "90005",
  "90006",
  "90007",
  "90008",
  "90009",
  "90010",
  "90011",
  "90012",
  "90013",
  "90014",
  "90015",
  "90016",
  "90017",
  "90018",
  "90019",
  "90020",
  "90021",
  "90022",
  "90023",
  "90024",
  "90025",
  "90026",
  "90027",
  "90028",
  "90029",
  "90030",
  "90031",
  "90032",
  "90033",
  "90034",
  "90035",
  "90036",
  "90037",
  "90038",
  "90039",
  "90040",
  "90041",
  "90042",
  "90043",
  "90044",
  "90045",
  "90046",
  "90047",
  "90048",
  "90049",
  "90050",
  "90051",
  "90052",
  "90053",
  "90054",
  "90055",
  "90056",
  "90057",
  "90058",
  "90059",
  "90060",
  "90061",
  "90062",
  "90063",
  "90064",
  "90065",
  "90066",
  "90067",
  "90068",
  "90070",
  "90071",
  "90072",
  "90073",
  "90074",
  "90075",
  "90076",
  "90077",
  "90078",
  "90079",
  "90080",
  "90081",
  "90082",
  "90083",
  "90084",
  "90086",
  "90087",
  "90088",
  "90089",
  "90091",
  "90093",
  "90095",
  "90096",
  "90099",
  "90101",
  "90102",
  "90103",
  "90189",
  "90069",
  "90090",
  "90094",
  "90230",
  "91331",
  "91335"
]

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
      userLocation: zipCodes[Math.floor(Math.random()*(zipCodes.length-1))],
      preferences: [],
        // i % 2 === 0
        //   ? [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
        //   : [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      // matches: matchesGen(i),
      matches: [],
      images: [pics[i], pics[Math.floor(Math.random()*(pics.length-1))], pics[Math.floor(Math.random()*(pics.length-1))]],
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
