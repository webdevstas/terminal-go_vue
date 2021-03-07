<template>
  <Header/>
  <div class="content-area">
    <FirstSection/>
    <MainProps />
    <BigScreen />
    <Sequence />
    <Travels />
    <Footer />
  </div>
</template>

<script>

import '@/assets/sass/global.sass'
import FirstSection from '@/components/sections/FirstSection'
import Header from '@/components/sections/Header'
import MainProps from '@/components/sections/MainProps'
import BigScreen from '@/components/sections/BigScreen'
import Sequence from '@/components/sections/Sequence'
import Travels from '@/components/sections/Travels'
import Footer from '@/components/sections/Footer'

export default {
  name: 'App',
  components: {
    Footer,
    Travels,
    Sequence,
    BigScreen,
    MainProps,
    Header,
    FirstSection
  }
}
</script>

<style lang="sass">
.container
  position: relative
  width: 70%
  left: 15%

.gradient-text
  color: transparent
  background-image: linear-gradient(45deg, var(--grad-from), var(--grad-to))
  -webkit-background-clip: text
  background-clip: text

.reveal
  position: relative

  &::after
    content: ''
    position: absolute
    display: block
    left: 0
    width: 100%
    height: 35%
    top: 65%
    background-image: linear-gradient(to top, #070707, rgba(0, 0, 0, 0))

</style>
