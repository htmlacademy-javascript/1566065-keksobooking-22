import {leafletMap} from './leaflet-map.js';
import {announcementForm} from './form.js';
import {getData} from './api.js';

getData(leafletMap.create)
announcementForm.validation();
announcementForm.clear(leafletMap.reset);
announcementForm.submitting(leafletMap.reset);
