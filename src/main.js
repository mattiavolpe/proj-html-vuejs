import { createApp } from 'vue'
import './assets/scss/app.scss'

// BOOTSTRAP
import * as bootstrap from 'bootstrap'

// FONTAWESOME
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faLinkedinIn,
  faInstagram,
  faFacebookF,
  faTwitter,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import {
  faSignal,
  faListUl,
  faSuitcase,
  faRocket,
  faGear,
  faUserGroup,
  faClapperboard,
  faArrowLeft,
  faArrowRight,
  faStar,
  faDisplay,
  faLifeRing,
  faWrench,
  faCartShopping,
  faMobileScreen,
} from '@fortawesome/free-solid-svg-icons'
import {
  faClock,
  faThumbsUp,
  faImage,
} from '@fortawesome/free-regular-svg-icons'
library.add(faLinkedinIn, faInstagram, faFacebookF, faTwitter, faSignal, faListUl, faClock, faSuitcase, faRocket, faThumbsUp, faGear, faUserGroup, faClapperboard, faImage, faArrowLeft, faArrowRight, faStar, faGithub, faDisplay, faLifeRing, faWrench, faCartShopping, faMobileScreen)

import App from './App.vue'
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
