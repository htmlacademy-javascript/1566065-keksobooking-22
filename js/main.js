import {buildAnnouncements} from './build-announcements.js';
import {card} from './card.js';

const NUMBER_OF_ANNOUNCEMENTS = 10;
const listCards = buildAnnouncements(NUMBER_OF_ANNOUNCEMENTS);

card.showOnPage(listCards[0]);
