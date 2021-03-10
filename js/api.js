const loadError = document.querySelector('.load-error')
const loadErrorButton = loadError.querySelector('.load-error__button')
const ANNOUNCEMENT_COUNT = 10;


const getData = (onSuccess) => {

  fetch('https://22.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((data) => {
      onSuccess(data.slice(0, ANNOUNCEMENT_COUNT));
    })
    .catch(() => {
      loadError.classList.remove('hidden');
      loadErrorButton.addEventListener('click', () => {
        loadError.classList.add('hidden');
      });
      onSuccess();
    });
}

export {getData}
