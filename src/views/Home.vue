<template>
  <div>
    <FirstSection/>
    <Video/>
    <MainProps/>
    <BigScreen/>
    <Travels/>
  </div>
</template>

<script>
import FirstSection from '@/components/sections/FirstSection'
import MainProps from '@/components/sections/Case'
import BigScreen from '@/components/sections/BigScreen'
import Travels from '@/components/sections/Travels'
import Video from '@/components/sections/Video'

export default {
  name: 'Home',
  components: {
    Video,
    Travels,
    BigScreen,
    MainProps,
    FirstSection
  },
  mounted () {

  }
}
</script>
