import {leafletMap} from './leaflet-map.js';
import {announcementForm} from './form.js';
import {getData} from './api.js';

getData(leafletMap.create)
announcementForm.addValidation();
announcementForm.clear(leafletMap.reset);
announcementForm.submit(leafletMap.reset);
