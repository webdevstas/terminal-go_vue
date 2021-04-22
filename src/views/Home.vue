<template>
  <div>
    <FirstSection/>
    <Case/>
    <Screen />
    <Excursions/>
    <Integrations/>
  </div>
</template>

<script>
import FirstSection from '@/components/sections/FirstSection'
import Case from '@/components/sections/Case'
import Excursions from '@/components/sections/Excursions'
import Screen from '@/components/sections/Screen'
import Integrations from '@/components/sections/Integrations'

export default {
  name: 'Home',
  components: {
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
        scrollTrigger: {
          trigger: item,
          scrub: true,
          // markers: true,
          start: 'top center',
          end: '+=200 center'
        }
      })
    })
  }
}
</script>
