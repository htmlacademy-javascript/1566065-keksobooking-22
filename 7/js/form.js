const form = document.querySelector('.ad-form');
const checkInSelect = form.querySelector('#timein');
const checkOutSelect = form.querySelector('#timeout');
const typeHousing = form.querySelector('#type');
const priceInput = form.querySelector('#price');
const capacity = form.querySelector('#capacity');
const roomNumber = form.querySelector('#room_number');
const capacityElements = capacity.querySelectorAll('option')
const withoutGuests = capacity.querySelector('[value="0"]')
const titleInput = form.querySelector('#title');
const clearButton = form.querySelector('.ad-form__reset');

const taskSuccessMessageTemplate = document.querySelector('#success').content;
const successMessageTemplate = taskSuccessMessageTemplate.querySelector('.success');
const successMessage = successMessageTemplate.cloneNode(true);
const taskErrorMessageTemplate = document.querySelector('#error').content;
const errorMessageTemplate = taskErrorMessageTemplate.querySelector('.error');
const errorMessage = errorMessageTemplate.cloneNode(true);
const errorMessageButton = errorMessage.querySelector('.error__button')

const TIMEOUT = 2000;

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE_NUMBER = 1000000;

const minHousingPrice = {
  flat: 1000,
  bungalow: 0,
  house: 5000,
  palace: 10000,
}

const showErrorMessage = () => {
  document.body.append(errorMessage);
  errorMessageButton.addEventListener('click', () => {
    errorMessage.remove();
  })
}

const showSuccessMessage = () => {
  document.body.append(successMessage);
  setTimeout(() => {
    successMessage.remove();
  }, TIMEOUT);
}

const announcementForm = {
  validation() {
    priceInput.setAttribute('min', minHousingPrice[typeHousing.value]);
    priceInput.setAttribute('placeholder', minHousingPrice[typeHousing.value]);
    typeHousing.addEventListener('change', () => {
      priceInput.setAttribute('min', minHousingPrice[typeHousing.value]);
      priceInput.setAttribute('placeholder', minHousingPrice[typeHousing.value]);
    });

    checkInSelect.addEventListener('change', () => {
      checkOutSelect.value = checkInSelect.value
    });

    checkOutSelect.addEventListener('change', () => {
      checkInSelect.value = checkOutSelect.value
    });

    capacity.value = roomNumber.value;

    capacityElements.forEach((element) => {
      if (element.value > roomNumber.value) {
        element.setAttribute('hidden', 'true');
      } else {
        capacity.value = roomNumber.value;
        element.removeAttribute('hidden');
      }
    });

    withoutGuests.setAttribute('hidden', 'true');

    roomNumber.addEventListener('change', () => {
      capacity.value = roomNumber.value;

      capacityElements.forEach((element) => {
        if (element.value > roomNumber.value) {
          element.setAttribute('hidden', 'true');
        }else {
          capacity.value = roomNumber.value;
          element.removeAttribute('hidden');
        }

        if (roomNumber.value === '100') {
          element.setAttribute('hidden', 'true');
          withoutGuests.removeAttribute('hidden');
          capacity.value = 0;
        }else {
          withoutGuests.setAttribute('hidden', 'true');
        }
      })
    });

    titleInput.addEventListener('input', () => {
      const valueLength = titleInput.value.length;

      if (valueLength < MIN_TITLE_LENGTH) {
        titleInput.setCustomValidity('Ещё ' + (MIN_TITLE_LENGTH - valueLength) +' симв.');
      } else if (valueLength > MAX_TITLE_LENGTH) {
        titleInput.setCustomValidity('Удалите лишние ' + (valueLength - MAX_TITLE_LENGTH) +' симв.');
      } else {
        titleInput.setCustomValidity('');
      }

      titleInput.reportValidity();
    });

    priceInput.addEventListener('input', () => {
      if(priceInput.value < minHousingPrice[typeHousing.value]) {
        priceInput.setCustomValidity('Минимальная цена ' + minHousingPrice[typeHousing.value])
      }else if (priceInput.value > MAX_PRICE_NUMBER) {
        priceInput.setCustomValidity('Максимальная цена  ' + MAX_PRICE_NUMBER);
      } else {
        priceInput.setCustomValidity('');
      }

      priceInput.reportValidity();
    })
  },
  dataReset() {
    form.reset();
    priceInput.setAttribute('min', minHousingPrice[typeHousing.value]);
    priceInput.setAttribute('placeholder', minHousingPrice[typeHousing.value]);
    capacityElements.forEach((element) => {
      if (element.value > roomNumber.value) {
        element.setAttribute('hidden', 'true');
      } else {
        capacity.value = roomNumber.value;
        element.removeAttribute('hidden');
      }
    });
    withoutGuests.setAttribute('hidden', 'true');
  },
  submitting(onSuccess) {
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();

      const formData = new FormData(evt.target);

      fetch(
        'https://22.javascript.pages.academy/keksobooking',
        {
          method: 'POST',
          body: formData,
        },
      )
        .then((response) => {
          if (response.ok) {
            this.dataReset();
            onSuccess();
            showSuccessMessage();
          }
        })
        .catch(() => {
          showErrorMessage();
        });
    });
  },
  clear(mapReset) {
    clearButton.addEventListener('click', (evt) => {
      evt.preventDefault();
      this.dataReset();
      mapReset();
    });
  },
}

export {announcementForm}
