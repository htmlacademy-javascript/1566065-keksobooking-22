import {buildAnnouncements} from './build-announcements.js';
import {showCardOnPage} from './show-card.js';

const NUMBER_OF_ANNOUNCEMENTS = 10;
const listCards = buildAnnouncements(NUMBER_OF_ANNOUNCEMENTS);

showCardOnPage(listCards[0]);
