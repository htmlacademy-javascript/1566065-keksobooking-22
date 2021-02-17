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

// случайный элемент

const getRandomArrayElement = (element) => {
  return element[generateNumber(0, element.length - 1)];
};

//Массив случайной длины

const getRandomLength = (arrayName, elements) => {
  arrayName = [];
  for (let i = 0; i < generateNumber(0, elements.length); i++) {
    arrayName.push(elements[i]);
  }
  return arrayName;
};

export {generateNumber, generateFractionalNumber, getRandomArrayElement, getRandomLength};
