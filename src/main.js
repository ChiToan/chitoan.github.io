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
  faTrash,
  faCog,
  faLink,
  faExternalLinkAlt,
  faFastForward,
  faFastBackward,
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
  faTimes,
  faSync,
  faTrash,
  faCog,
  faLink,
  faExternalLinkAlt,
  faFastForward,
  faFastBackward,
);

const store = createStore({
  state() {
    return {
      number: 5,
      interval: 15,
      moving: true,
      shuffle: false,
    };
  },
});

let app = createApp(App);
app.use(store);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
