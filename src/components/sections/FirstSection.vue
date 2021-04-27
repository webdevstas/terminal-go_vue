<template>
  <section class="first-section">
    <h1 class="first-section__title">
      Интерактивная городская навигационная система</h1>
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

<script>

import AppSequence from '@/components/ui/AppSequence'

export default {
  components: { AppSequence },
  mounted () {
    this.makePin('.first-section__pin-content', '.first-section', false, '30 top')
  },
  methods: {

  }
}
</script>

<style lang="sass" scoped>
.first-section
  height: 2000px

  &__title
    font-size: 38px
    font-weight: bold
    color: #00c4ff
    text-align: center
</style>
