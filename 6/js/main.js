import {buildAnnouncements} from './build-announcements.js';
import {createMap} from './create-map.js';

const NUMBER_OF_ANNOUNCEMENTS = 10;
const listCards = buildAnnouncements(NUMBER_OF_ANNOUNCEMENTS);

createMap(listCards)
