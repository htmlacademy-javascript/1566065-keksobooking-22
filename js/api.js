import {showLoadingErrorMessage} from './notifications.js'

const ANNOUNCEMENT_COUNT = 10;
const SERVER_ADDRESS = 'https://22.javascript.pages.academy/keksobooking';

const getData = (onSuccess) => {
  fetch(SERVER_ADDRESS + '/data')
    .then((response) => response.json())
    .then((data) => {
      onSuccess(data.slice(0, ANNOUNCEMENT_COUNT));
    })
    .catch(() => {
      showLoadingErrorMessage();
      onSuccess();
    });
}

const sendData = (data, onSuccess, dataReset, successMessage, errorMessage) => {
  fetch(
    SERVER_ADDRESS,
    {
      method: 'POST',
      body: data,
    },
  )
    .then((response) => {
      if (response.ok) {
        dataReset();
        onSuccess();
        successMessage();
      }
    })
    .catch(() => {
      errorMessage();
    });
}

export {getData, sendData}
