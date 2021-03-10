import {card} from './card.js';
import {pageStates} from './page-states.js';


const address = document.querySelector('#address');
const TokyoCenterCoordinates = {
  lat: 35.68950,
  lng: 139.69171,
};
address.value = TokyoCenterCoordinates.lat.toFixed(5) + ', ' + TokyoCenterCoordinates.lng.toFixed(5);
/* global L:readonly */

const map = L.map('map-canvas');
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

const leafletMap = {
  create(markersData) {
    pageStates.makeInactive();
    map.on('load', () => {
      pageStates.makeActive();
    }).setView(TokyoCenterCoordinates, 10);

    L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      },
    ).addTo(map);

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
      const lat = location.lat;
      const lng = location.lng;

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
  },
  reset() {
    map.setView(TokyoCenterCoordinates, 10);
    mainMarker.setLatLng(TokyoCenterCoordinates);
    address.value = TokyoCenterCoordinates.lat.toFixed(5) + ', ' + TokyoCenterCoordinates.lng.toFixed(5);
  },
}

export {leafletMap}
