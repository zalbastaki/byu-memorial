import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default () => {
    library.add(faChevronLeft);

    Vue.component('fa-icon', FontAwesomeIcon);
};
