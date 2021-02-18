import {buildAnnouncements} from './build-announcements.js';

const mapCanvas = document.querySelector('#map-canvas');
const taskTemplateCard = document.querySelector('#card').content;
const popupTemplate = taskTemplateCard.querySelector('.popup');


const displayAnnouncements = (numberAds) => {
  const fragment = document.createDocumentFragment();
  const ads = buildAnnouncements(numberAds);

  for (let i = 0; i < ads.length; i++) {
    const card = ads[i];
    const popup = popupTemplate.cloneNode(true);
    const popupTitle = popup.querySelector('.popup__title');
    const popupAddress = popup.querySelector('.popup__text--address');
    const popupPrice = popup.querySelector('.popup__text--price');
    const popupType = popup.querySelector('.popup__type');
    const popupCapacity = popup.querySelector('.popup__text--capacity');
    const popupTime = popup.querySelector('.popup__text--time');
    const popupFeatures = popup.querySelector('.popup__features');
    const popupDescription = popup.querySelector('.popup__description');
    const popupPhotos = popup.querySelector('.popup__photos');
    const popupAvatar = popup.querySelector('.popup__avatar');

    popupTitle.textContent = card.offer.title;
    popupAddress.textContent = 'X: ' + card.offer.address.x + ', Y: ' + card.offer.address.y;
    popupPrice.textContent = card.offer.price + ' ₽/ночь';

    const variantsHousing = {
      flat: 'Квартира',
      bungalow: 'Бунгало',
      house: 'Дом',
      palace: 'Дворец',
    };

    popupType.textContent = variantsHousing[card.offer.type]

    const ROOMS_TEXT_FORM = [
      ' комната',
      ' комнаты',
      ' комнат',

    ]

    const GUESTS_TEXT_FORM = [
      ' гостя',
      ' гостей',
      ' гостей',
    ]

    const changeEndings = (numbers, textForm) => {
      if (numbers === 1) {
        return textForm[0]
      }
      if (2 <= numbers && numbers <= 4) {
        return textForm[1]
      }
      if (numbers >= 5) {
        return textForm[2]
      }
    };

    popupCapacity.textContent = card.offer.rooms + changeEndings(card.offer.rooms, ROOMS_TEXT_FORM) + ' для ' + card.offer.guests + changeEndings(card.offer.guests, GUESTS_TEXT_FORM);
    popupTime.textContent = 'Заезд после ' + card.offer.checkin + ', выезд до ' + card.offer.checkout;

    if(card.offer.features.length === 0) {
      popupFeatures.remove();
    } else {
      popupFeatures.innerHTML = '';
      card.offer.features.forEach((feature) => {
        let newFeature = document.createElement('li');
        newFeature.classList.add('popup__feature');
        newFeature.classList.add('popup__feature--' + feature);
        popupFeatures.appendChild(newFeature);
      });
    }

    popupDescription.textContent = card.offer.description;

    const photoFragment = document.createDocumentFragment();
    if(card.offer.photos.length === 0) {
      popupPhotos.remove();
    } else {
      let newPhoto = popup.querySelector('.popup__photo').cloneNode(true);
      popupPhotos.innerHTML = '';
      card.offer.photos.forEach((photo) => {
        newPhoto.src = photo;
        photoFragment.appendChild(newPhoto);
        newPhoto = newPhoto.cloneNode(true)
      });
    }
    popupPhotos.appendChild(photoFragment);

    popupAvatar.src = card.author;

    fragment.appendChild(popup);
  }

  mapCanvas.appendChild(fragment);
}

export {displayAnnouncements}
