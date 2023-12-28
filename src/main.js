import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import components from "./components/UI/index.js";
import store from "./store/index.js";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { MdDeleteforever, RiZhihuFill } from "oh-vue-icons/icons";

addIcons(MdDeleteforever, RiZhihuFill);

const app = createApp(App);

app.component("v-icon", OhVueIcon);
app.use(router);
app.use(store);

components.forEach((component) => {
  app.component(component.name, component);
});

app.mount("#app");