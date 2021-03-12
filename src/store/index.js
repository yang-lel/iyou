import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state() {
    return {
      user : localStorage.getItem("userinfo") ? localStorage.getItem("userinfo") : null,
      location : ''
    }
  },
  mutations: {
    $_setStorage (state, value) {
      localStorage.setItem("userinfo",JSON.stringify(value))
      state.user = localStorage.getItem("userinfo")      
    },
    $_removeStorage (state) {
      localStorage.removeItem("userinfo")
      state.user = null
    },
    $_setLocation(state,newVal){
      state.location = newVal
    }
  },
  actions: {
  },
  modules: {
  }
})
