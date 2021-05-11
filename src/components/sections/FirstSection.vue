<template>
  <section class="first-section">
    <h1 class="section-title">
      Интерактивная городская навигационная система</h1>
    <p class="first-section__preview-text fade-out">Умный городской терминал меняет восприятие города, с ним удобство взаимодействия с инфраструктурой выходит на максимально комфортный уровень, а его внешний вид станет отличным дополнением местных достопримечательностей.</p>
    <div class="first-section__pin-content">
      <AppSequence
        id="start__frame"
        trigger=".first-section"
        frame-count="158"
        files-src="/seq/start/SEQ_Start"
      />
    </div>
  </section>
</template>

<script lang="ts">

import AppSequence from '@/components/ui/AppSequence'

export default {
  components: { AppSequence },
  mounted () {
    this.makePin('.first-section__pin-content', '.first-section', false, '100 top')
  },
  methods: {
    startTextAnim () {
      this.gsap.from('.first-section__preview-text', {
        y: 300,
        opacity: 0,
        delay: 2,
        duration: 1,
        ease: 'power1.out'
      })
    }
  }
}
</script>

<style lang="sass" scoped>
.first-section
  height: 2000px
  position: relative

  &__preview-text
    position: absolute
    left: 50%
    transform: translateX(-50%)
    top: 150px
    z-index: 100
    font-size: 28px
    width: 40vw

  &__title
    font-size: 38px
    font-weight: bold
    color: #00c4ff
    text-align: center
</style>
