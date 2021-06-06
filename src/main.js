import { createApp } from "vue";
import App from "./App.vue";
import { createStore } from "vuex";

import {
  faAddressCard,
  faHome,
  faList,
  faUser,
  faEnvelope,
  faPhone,
  faPlay,
  faPause,
  faPlus,
  faMinus,
  // faTimes,
  // faSync,
  faRandom,
  faTrash,
  faCog,
  faLink,
  faExternalLinkAlt,
  faFastForward,
  faFastBackward,
  faCompressAlt,
  // faSlidersH,
  faImage,
  // faAdjust,
  faToggleOn,
  faToggleOff,
  faStopwatch,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

library.add(
  faGithub,
  faLinkedin,
  faWhatsapp,
  faAddressCard,
  faHome,
  faList,
  faUser,
  faEnvelope,
  faPhone,
  faPlay,
  faPause,
  faPlus,
  faMinus,
  // faTimes,
  // faSync,
  faRandom,
  faTrash,
  faCog,
  faLink,
  faExternalLinkAlt,
  faFastForward,
  faFastBackward,
  faCompressAlt,
  // faSlidersH,
  faImage,
  // faAdjust,
  faToggleOn,
  faToggleOff,
  faStopwatch,
);

const store = createStore({
  state() {
    return {
      number: 4,
      interval: 20,
      moving: false,
      shuffle: false,
      systemTheme: true,
    };
  },
});

const app = createApp(App);
app.use(store);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
