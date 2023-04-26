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
} from '@fortawesome/free-brands-svg-icons'
import {
  faSignal,
  faListUl,
} from '@fortawesome/free-solid-svg-icons'
import {
  faClock,
} from '@fortawesome/free-regular-svg-icons'
library.add(faLinkedinIn, faInstagram, faFacebookF, faTwitter, faSignal, faListUl, faClock)

import App from './App.vue'

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
