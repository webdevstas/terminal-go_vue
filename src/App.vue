<template>
  <Header />
  <div class="content-area">
    <router-view></router-view>
  </div>
  <Footer/>
</template>

<script>

import '@/assets/sass/global.sass'
import Header from '@/components/sections/Header'
import Footer from '@/components/sections/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="sass">

</style>
