<template>
  <div>
    <FirstSection/>
    <Case/>
    <Screen/>
    <Camera/>
    <Excursions/>
    <Integrations/>
  </div>
</template>

<script lang="ts">
import FirstSection from '@/components/sections/FirstSection'
import Case from '@/components/sections/Case'
import Excursions from '@/components/sections/Excursions'
import Screen from '@/components/sections/Screen'
import Integrations from '@/components/sections/Integrations'
import Camera from '@/components/sections/Camera'

export default {
  name: 'Home',
  components: {
    Camera,
    Integrations,
    Screen,
    Case,
    Excursions,
    FirstSection
  },
  mounted () {
    this.gsap.utils.toArray('.fade-in').forEach(item => {
      this.gsap.from(item, {
        opacity: 0,
        y: 100,
        scrollTrigger: {
          trigger: item,
          scrub: true,
          // markers: true,
          start: '+100 bottom',
          end: '+=300 bottom'
        }
      })
    })

    this.gsap.utils.toArray('.fade-out').forEach(item => {
      this.gsap.to(item, {
        opacity: 0,
        y: -50,
        scrollTrigger: {
          // markers: true,
          trigger: item,
          scrub: true,
          start: 'top +=150',
          end: 'bottom +=150'
        }
      })
    })
  }
}
</script>
