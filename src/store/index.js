import { createStore } from 'vuex'
import terminals from '@/store/modules/terminals'
import clusters from '@/store/modules/clusters'

export default createStore({
  state: {
    mapInitialized: false
  },
  mutations: {
    initMap (state) {
      state.mapInitialized = true
    }
  },
  actions: {
  },
  modules: {
    terminals,
    clusters
  }
})
