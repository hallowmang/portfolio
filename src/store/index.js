import { createStore } from 'vuex'

export default createStore({
  state: {
    isActive:false,
  },
  getters: {
  },
  mutations: {
    toggleMenu(state){
      state.isActive = !state.isActive;
    }
    
  },
  actions: {
  },
  modules: {
  }
})
