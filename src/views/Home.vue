<template>
  <div>
    <FirstSection/>
    <MainProps/>
    <BigScreen/>
    <Sequence/>
    <Travels/>
  </div>
</template>

<script>
import FirstSection from '@/components/sections/FirstSection'

import MainProps from '@/components/sections/MainProps'
import BigScreen from '@/components/sections/BigScreen'
import Sequence from '@/components/sections/Sequence'
import Travels from '@/components/sections/Travels'

export default {
  name: 'Home',
  components: {
    Travels,
    Sequence,
    BigScreen,
    MainProps,
    FirstSection
  }
}
</script>
