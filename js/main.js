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

generateNumber(2, 5);

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
