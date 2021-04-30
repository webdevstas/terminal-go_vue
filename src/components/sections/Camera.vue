<template>
  <section class="camera">
    <h2 class="section-title fade-in">Видеоконтроль</h2>
    <div class="camera__pin-content">
      <div class="camera__wrapper">
        <AppSequence
          id="camera"
          trigger=".camera"
          files-src="/seq/optic/camera"
          frame-count="31"
          start="500 top"
        />
      </div>
    </div>
    <ul class="camera__prop-list">
      <li class="camera__prop-item fade-in">
        <h2 class="">Система видеонаблюдения высокой чёткости 4к</h2>
      </li>
      <li class="camera__prop-item fade-in">
        <h2 class="">Подключение к городской сети видеонаблюдения</h2>
      </li>
      <li class="camera__prop-item fade-in">
        <h2 class="">Защищенная сеть связи на базе оптоволоконной линии</h2>
      </li>
      <li class="camera__prop-item fade-in">
        <h2 class="">Хранение данных с доступом муниципальных служб и силовых структур</h2>
      </li>
      <li class="camera__prop-item fade-in">
        <h2 class="">Нейросеть на базе "Speclab", распознавание лиц</h2>
      </li>
      <li class="camera__prop-item fade-in">
        <h2 class="">Опознавание лиц, находящихся в розыске</h2>
      </li>
      <li class="camera__prop-item fade-in">
        <h2 class="">Сбор аналитической тепловой карты по проходимости на местах размещения</h2>
      </li>
    </ul>
  </section>
</template>

<script>
import AppSequence from '@/components/ui/AppSequence'

export default {
  components: {
    AppSequence
  },
  mounted () {
    this.makePin('.camera__pin-content', '.camera', false, '90 top')
    this.gsap.from('#camera', {
      y: '-65vh',
      scrollTrigger: {
        trigger: '.camera__wrapper',
        scrub: 1,
        // markers: true,
        start: 'top top',
        end: '500 top'
      }
    })
  }
}
</script>

<style lang="sass" scoped>
.camera
  height: 2500px
  position: relative

  &__wrapper
    background-color: #131313
    height: 100%

  &__prop
    &-list
      position: absolute
      right: 200px
      top: 100px
      z-index: 100
      display: flex
      flex-direction: column
      justify-content: space-around
      list-style: none
      width: 50%
      height: 1200px

    &-item
      font-size: 20px
      font-family: Jura-reg
</style>
