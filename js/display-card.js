import {buildAnnouncements} from './build-announcements.js';

const displayAnnouncements = (announcementsCount) => {
  const mapCanvas = document.querySelector('#map-canvas');
  const announcementFragment = document.createDocumentFragment();

  for (let i = 0; i < announcementsCount; i++) {

    const announcement = buildAnnouncements(announcementsCount)[i];

    const taskTemplateCard = document.querySelector('#card').content;
    const popupTemplate = taskTemplateCard.querySelector('.popup');
    const popupAnnouncement = popupTemplate.cloneNode(true);

    const popupTitle = popupAnnouncement.querySelector('.popup__title');
    const popupAddress = popupAnnouncement.querySelector('.popup__text--address');
    const popupPrice = popupAnnouncement.querySelector('.popup__text--price');
    const popupType = popupAnnouncement.querySelector('.popup__type');
    const popupCapacity = popupAnnouncement.querySelector('.popup__text--capacity');
    const popupTime = popupAnnouncement.querySelector('.popup__text--time');
    const popupFeatures = popupAnnouncement.querySelector('.popup__features');
    const popupDescription = popupAnnouncement.querySelector('.popup__description');
    const popupPhotos = popupAnnouncement.querySelector('.popup__photos');
    const popupAvatar = popupAnnouncement.querySelector('.popup__avatar');

    popupTitle.textContent = announcement.offer.title;
    popupAddress.textContent = 'X: ' + announcement.offer.address.x + ', Y: ' + announcement.offer.address.y;
    popupPrice.textContent = announcement.offer.price + ' ₽/ночь';

    if(announcement.offer.type === 'flat') {
      popupType.textContent = 'Квартира'
    }
    if(announcement.offer.type === 'bungalow') {
      popupType.textContent = 'Бунгало'
    }
    if(announcement.offer.type === 'house') {
      popupType.textContent = 'Дом'
    }
    if(announcement.offer.type === 'palace') {
      popupType.textContent = 'Дворец'
    }


    let numberRooms = ' комнат';
    let numberGuest = ' гостей';
    if (announcement.offer.rooms === 1) {
      numberRooms = ' комната'
    }
    if (2 <= announcement.offer.rooms >= 4) {
      numberRooms = ' комнаты'
    }
    if (announcement.offer.guests === 1) {
      numberGuest = ' гостя'
    }
    popupCapacity.textContent = announcement.offer.rooms + numberRooms + ' для ' + announcement.offer.guests + numberGuest;
    popupTime.textContent = 'Заезд после ' + announcement.offer.checkin + ', выезд до ' + announcement.offer.checkout;

    if(announcement.offer.features.length === 0) {
      popupFeatures.remove();
    } else {
      popupFeatures.innerHTML = '';
      for (let i = 0; i < announcement.offer.features.length; i++) {
        let newFeature = document.createElement('li');
        newFeature.classList.add('popup__feature');
        newFeature.classList.add('popup__feature--' + announcement.offer.features[i]);
        popupFeatures.appendChild(newFeature);
      }
    }

    popupDescription.textContent = announcement.offer.description;

    const photoFragment = document.createDocumentFragment();
    if(announcement.offer.photos.length === 0) {
      popupPhotos.remove();
    } else {
      let newPhoto = popupAnnouncement.querySelector('.popup__photo').cloneNode(true);
      popupPhotos.innerHTML = '';
      for (let i = 0; i < announcement.offer.photos.length; i++) {
        newPhoto.src = announcement.offer.photos[i];
        photoFragment.appendChild(newPhoto);
        newPhoto = newPhoto.cloneNode(true)
      }
    }
    popupPhotos.appendChild(photoFragment);

    popupAvatar.src = announcement.author;

    announcementFragment.appendChild(popupAnnouncement);
  }

  mapCanvas.appendChild(announcementFragment);
}

export {displayAnnouncements}
