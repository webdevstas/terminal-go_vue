import { createStore } from 'vuex'
import terminals from './modules/terminals'
import clusters from './modules/clusters'
import { Store } from 'vuex'

declare module '@vue/runtime-core' {
  // declare your own store states
  interface State {
    mapInitialized: boolean
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}

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
