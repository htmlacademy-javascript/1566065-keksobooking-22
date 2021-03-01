const form = document.querySelector('.ad-form');
const formElements = form.querySelectorAll('fieldset');
const mapFilters = document.querySelector('.map__filters');
const mapFiltersElements = Array.from (mapFilters.children);

const pageStates = {
  inactive() {
    const makeDisabled = (item) => {
      item.forEach((element) => {
        element.setAttribute('disabled', 'disabled')
      });
    };

    form.classList.add('ad-form--disabled');
    makeDisabled(formElements);
    mapFilters.classList.add('map__filters--disabled');
    makeDisabled(mapFiltersElements);
  },
  active() {
    const makeActive = (item) => {
      item.forEach((element) => {
        element.removeAttribute('disabled', 'disabled')
      });
    };

    form.classList.remove('ad-form--disabled');
    makeActive(formElements);
    mapFilters.classList.remove('map__filters--disabled');
    makeActive(mapFiltersElements);
  },
}

export {pageStates}

