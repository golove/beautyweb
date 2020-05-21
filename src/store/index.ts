import Vue from "vue";
import Vuex from "vuex";
import ActionHelper from "./ActionHelper";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      name: "紫雲英",
      avatar:
        "http://yanxuan.nosdn.127.net/4922d63fff73c39905bf63112de35a9a.jpg",
      email: "liuziyu22@qq.com"
    },
    article: [],
    actionHelper: new ActionHelper(),
    filterId: -1 //筛选分类id
  },
  mutations: {
    setFilterId(state, id) {
      state.filterId = id;
    }
  },
  actions: {},
  modules: {}
});
