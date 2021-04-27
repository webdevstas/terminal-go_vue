<template>
  <section class="camera">
    <div class="camera-pin__content">
      <app-card class="camera-title__card fade-in">
        <h2>Видеоконтроль</h2>
      </app-card>
      <AppSequence
        id="camera"
        trigger=".camera"
        files-src="/seq/optic/camera"
        frame-count="31"
        start="30% top"
      />
    </div>
    <ul class="camera-prop__list">
      <li class="camera-prop__item fade-in">
        <h2 class="">Система видеонаблюдения высокой чёткости 4к</h2>
      </li>
      <li class="camera-prop__item fade-in">
        <h2 class="">Подключение к городской сети видеонаблюдения</h2>
      </li>
      <li class="camera-prop__item fade-in">
        <h2 class="">Защищенная сеть связи на базе оптоволоконной линии</h2>
      </li>
      <li class="camera-prop__item fade-in">
        <h2 class="">Хранение данных с доступом муниципальных служб и силовых структур</h2>
      </li>
      <li class="camera-prop__item fade-in">
        <h2 class="">Нейросеть на базе "Speclab", распознавание лиц</h2>
      </li>
      <li class="camera-prop__item fade-in">
        <h2 class="">Опознавание лиц, находящихся в розыске</h2>
      </li>
      <li class="camera-prop__item fade-in">
        <h2 class="">Сбор аналитической тепловой карты по проходимости на местах размещения</h2>
      </li>
    </ul>
  </section>
</template>

<script>
import AppSequence from '@/components/ui/AppSequence'
import AppCard from '@/components/ui/AppCard'

export default {
  components: {
    AppCard,
    AppSequence
  },
  mounted () {
    this.makePin('.camera-pin__content', '.camera')
  }
}
</script>

<style lang="sass" scoped>
.camera
  height: 2500px
  position: relative

  &-title__card
    position: absolute
    left: 0
    top: 100px
    background-color: rgba(105, 0, 153, 0.5)
    width: 400px

    & h2
      font-size: 36px
      text-transform: uppercase
      text-align: center

  &-prop
    &__list
      position: absolute
      right: 200px
      top: 200px
      z-index: 100
      display: flex
      flex-direction: column
      justify-content: space-around
      list-style: none
      width: 50%
      height: 1200px
    &__item
      font-size: 24px
</style>
