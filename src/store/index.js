import { createStore } from "vuex";
import categories from "./modules/categories.js";
import balance from "./modules/balance.js";
import records from './modules/records.js'

export default createStore({
  state() {
    return {};
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    Categories: categories,
    Balance: balance,
    Records: records,
  },
  
});