// Случайное число

const randomNumber = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min < 0 || max < 0) {
    return alert('Диапазон может быть только положительный, включая ноль')
  }
  if (min >= max) {
    return alert('Диапазон задан неверно')
  }
  return alert('Случайное число из заданного диапозона: ' + (Math.floor(Math.random() * (max - min + 1)) + min));
}

// Случайное число с плавующей точкой

const randomNonInteger = function (min, max, digitsAfter) {
  if (min < 0 || max < 0) {
    return alert('Диапазон может быть только положительный, включая ноль')
  }
  if (min >= max) {
    return alert('Диапазон задан неверно')
  }
  let degree = 1;
  for (let i = 0; i < digitsAfter; i++) {
    degree = degree * 10;
  }
  max = max * degree;
  min = min * degree;
  return alert('Случайное число из заданного диапозона: ' + ((Math.floor(Math.random() * (max - min + 1)) + min)/degree).toFixed(digitsAfter));
}





