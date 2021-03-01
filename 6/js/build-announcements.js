import {generateNumber, generateFractionalNumber, getRandomArrayElement, getRandomLength} from './util.js';

// Данные

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
];

const HOURS = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

// Автор

const createAuthor = () => {
  return String('img/avatars/user0' + generateNumber(1, 8) + '.png');
};

// Координаты


const createLocation = () => {
  return {
    x: Number(generateFractionalNumber(35.65, 35.7, 5)),
    y: Number(generateFractionalNumber(139.7, 139.8, 5)),
  }
};


// Сборка объявления

const createAnnouncement = () => {
  const coordinates = createLocation()
  const createOffer = () => {
    return {
      title: 'Заголовок',
      address: coordinates,
      price: generateNumber(1, 999999),
      type: String(getRandomArrayElement(TYPES)),
      rooms: generateNumber(1, 10),
      guests: generateNumber(1, 10),
      checkin: String(getRandomArrayElement(HOURS)),
      checkout: String(getRandomArrayElement(HOURS)),
      features: getRandomLength('featuresList', FEATURES),
      description: 'Здесь описание помещения',
      photos: getRandomLength('photosList', PHOTOS),
    }
  };

  return {
    author: createAuthor(),
    offer: createOffer(),
    location: coordinates,
  }
};

const buildAnnouncements = (similarAnnouncementsCount) => {
  return new Array(similarAnnouncementsCount).fill(null).map(() => createAnnouncement());
};

export {buildAnnouncements}
