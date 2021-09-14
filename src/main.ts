import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import element from "element-plus";
import "@/style/base.scss";
import "@/style/iconfont.scss";
import "@/ts/iconfont.js";
import "@/ts/base.ts";
createApp(App).use(router).use(element).mount("#app");
