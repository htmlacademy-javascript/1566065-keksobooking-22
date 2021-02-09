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

const TYPES = [
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

//Массив случайной длины

const getRandomLength = (arrayName, elements) => {
  arrayName = [];
  for (let i = 0; i < generateNumber(0, elements.length-1); i++) {
    arrayName.push(elements[i]);
  }
  return arrayName;
};

const createOffer = () => {
  return {
    title: 'Заголовок',
    address: createLocation(),
    price: generateNumber(1, 999999999999),
    type: String(getRandomArrayElement(TYPES)),
    rooms: generateNumber(1, 999999999999),
    guests: generateNumber(1, 999999999999),
    checkin: String(getRandomArrayElement(TIME)),
    checkout: String(getRandomArrayElement(TIME)),
    features: getRandomLength('featuresList', FEATURES),
    description: 'Здесь описание помещения',
    photos: getRandomLength('photosList', PHOTOS),
  }
};

const createAnnouncement = () => {
  return  {
    author: createAuthor(),
    offer: createOffer(),
    location: createLocation(),
  }
};

const buildAnnouncements = (similarAnnouncementCount) => {
  return new Array(similarAnnouncementCount).fill(null).map(() => createAnnouncement());
};

buildAnnouncements(10);
