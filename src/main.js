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
  faTimes,
  faSync,
  faRandom,
  faTrash,
  faCog,
  faLink,
  faExternalLinkAlt,
  faFastForward,
  faFastBackward,
  faCompressAlt,
  faSlidersH,
  faImage,
  faAdjust,
  faToggleOn,
  faToggleOff,
  faStopwatch,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faCss3Alt,
  faGithub,
  faHtml5,
  faJava,
  faJs,
  faLaravel,
  faLinkedin,
  faPhp,
  faPython,
  faReact,
  faVuejs,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faCss3Alt,
  faGithub,
  faHtml5,
  faJava,
  faJs,
  faLinkedin,
  faLaravel,
  faPhp,
  faPython,
  faReact,
  faVuejs,
  faWhatsapp
);

library.add(
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
  faCode
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
