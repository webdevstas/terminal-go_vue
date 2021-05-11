<template>
  <div>
    <Header />
    <div class="content-area">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">

import '@/assets/sass/global.sass'
import Header from './components/sections/Header.vue'
import Footer from './components/sections/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data() {
    return {}
  }
}
</script>

<style lang="sass">

</style>
