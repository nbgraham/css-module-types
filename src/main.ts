import { createApp } from "vue";
import App from "./App.vue";
import logCssModuleNames from "./logCssModuleNames";

createApp(App).mount("#app");
logCssModuleNames();
