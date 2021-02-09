// Случайное число

const generateNumber = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min < 0 || max < 0) {
    throw Error('Диапазон может быть только положительный, включая ноль.')
  }
  if (min >= max) {
    throw Error('Неправильный формат данных.')
  }
  return (Math.floor(Math.random() * (max - min + 1)) + min);
}

// Случайное число с плавующей точкой

const generateFractionalNumber = function (extremumMin, extremumMax, digitsAfter) {
  if (extremumMin < 0 || extremumMax < 0) {
    throw Error('Диапазон может быть только положительный, включая ноль.')
  }
  if (extremumMin >= extremumMax) {
    throw Error('Неправильный формат данных.')
  }
  return ((Math.random() * (extremumMax - extremumMin) + extremumMin).toFixed(digitsAfter));
}

generateFractionalNumber(3.9994, 4, 4);


// Данные

const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
];

const TIME = [
  '12:00',
  '13:00',
  '14:00',
]

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
]

const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
]

const SIMILAR_ANNOUNCEMENT_COUNT = 10;

// случайный элемент

const getRandomArrayElement = (element) => {
  return element[generateNumber(0, element.length - 1)];
};

// Возврат объекта

const createAuthor = () => {
  return String('img/avatars/user' + generateNumber(1, 8) + '.png');
};

const createLocation = () => {
  return {
    x: Number(generateFractionalNumber(35.65, 35.7, 5)),
    y: Number(generateFractionalNumber(139.7, 139.8, 5)),
  }
};

const createFeatures = () => {
  let featuresList = [];
  let featuresLength = generateNumber(0, FEATURES.length-1);
  for (let i = 0; i < featuresLength; i++) {
    featuresList.push(FEATURES[i]);
  }
  return featuresList;
};

const createPhotos = () => {
  let photosList = [];
  let photosLength = generateNumber(0, PHOTOS.length-1);
  for (let i = 0; i < photosLength; i++) {
    photosList.push(PHOTOS[i]);
  }
  return photosList;
};

const createOffer = () => {
  return {
    title: 'Заголовок',
    address: createLocation(),
    price: generateNumber(1, 999999999999),
    type: String(getRandomArrayElement(TYPE)),
    rooms: generateNumber(1, 999999999999),
    guests: generateNumber(1, 999999999999),
    checkin: String(getRandomArrayElement(TIME)),
    checkout: String(getRandomArrayElement(TIME)),
    features: createFeatures(),
    description: 'Здесь описание помещения',
    photos: createPhotos(),
  }
};

const createAnnouncement = () => {
  const announcement = {
    author: createAuthor(),
    offer: createOffer(),
    location: createLocation(),
  }
  return new Array(SIMILAR_ANNOUNCEMENT_COUNT).fill(null).map(() => announcement);
};

createAnnouncement();

//console.log(createAnnouncement())

