import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import Antd from "ant-design-vue";

import "ant-design-vue/dist/antd.css";

Vue.config.productionTip = false;

Vue.use(Antd);

//引入 axios
import axios from "axios";

// 引入 loadsh
import _ from "lodash";

Vue.prototype._ = _;

// 动态计算 rem

import "@/utils/rem.js";

//引入公共样式
import "@/styles/main.scss";


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
