import {card} from './card.js';
import {pageStates} from './page-states.js';


const address = document.querySelector('#address');
const TokyoCenterCoordinates = {
  lat: 35.68950,
  lng: 139.69171,
}
address.value = TokyoCenterCoordinates.lat.toFixed(5) + ', ' + TokyoCenterCoordinates.lng.toFixed(5);

const createMap = (markersData) => {
  /* global L:readonly */
  pageStates.makeInactive();
  const map = L.map('map-canvas').on('load', () => {
    pageStates.makeActive();
  }).setView(TokyoCenterCoordinates, 12);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  const mainPinIcon = L.icon({
    iconUrl: 'img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  });

  const mainMarker = L.marker(
    {
      lat: 35.6895,
      lng: 139.69171,
    },
    {
      draggable: true,
      icon: mainPinIcon,
    },
  );
  mainMarker.addTo(map);

  mainMarker.on('moveend', (evt) => {
    address.value = evt.target.getLatLng().lat.toFixed(5) + ', ' + evt.target.getLatLng().lng.toFixed(5)
  });

  markersData.forEach(({location}, number) => {
    const icon = L.icon({
      iconUrl: 'img/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });
    const lat = location.x;
    const lng = location.y;

    const marker = L.marker(
      {
        lat,
        lng,
      },
      {
        icon,
      },
    );
    marker
      .addTo(map)
      .bindPopup(card.showOnPage(markersData[number]));
  });
}

export {createMap}
