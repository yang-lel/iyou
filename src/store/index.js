import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state() {
    return {
      userinfo : null,
      location : ''
    }
  },
  mutations: {
    $_setLocation(state,newVal){
      state.location = newVal
    },
    $_setUserInfo(state,newval){
      state.userinfo = newval
    }
  },
  actions: {
  },
  modules: {
  }
})
