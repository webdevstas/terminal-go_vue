import { createStore } from 'vuex'
import terminals from './modules/terminals'
import clusters from './modules/clusters'

export default createStore({
  state: {
    mapInitialized: false
  },
  mutations: {
    initMap (state) {
      state.mapInitialized = true
    }
  },
  actions: {},
  modules: {
    terminals,
    clusters
  }
})
