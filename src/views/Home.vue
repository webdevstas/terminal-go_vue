<template>
  <div>
    <FirstSection/>
    <Video/>
    <Case/>
    <Screen />
    <Excursions/>
    <Travels/>
  </div>
</template>

<script>
import FirstSection from '@/components/sections/FirstSection'
import Case from '@/components/sections/Case'
import Excursions from '@/components/sections/Excursions'
import Travels from '@/components/sections/Travels'
import Video from '@/components/sections/Video'
import Screen from '@/components/sections/Screen'

export default {
  name: 'Home',
  components: {
    Screen,
    Case,
    Video,
    Travels,
    Excursions,
    FirstSection
  },
  mounted () {

  }
}
</script>
