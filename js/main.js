import {buildAnnouncements} from './build-announcements.js';
import {createMap} from './create-map.js';
import {announcementForm} from './form.js';

const NUMBER_OF_ANNOUNCEMENTS = 10;
const listCards = buildAnnouncements(NUMBER_OF_ANNOUNCEMENTS);

createMap(listCards);
announcementForm.validation();
