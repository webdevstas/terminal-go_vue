<template>
  <section class="case">
    <div class="case__pin-content">
      <h2 class="section-title case__title fade-in">
        Антивандальный корпус
      </h2>
      <div class="case__list-wrapper">
        <div class="case__item">
          <AppAnimList
            :items="propList"
            name="case"
          />
        </div>
        <div class="case__film-wrapper reveal">
          <AppSequence
            id="ip__frame"
            trigger=".case"
            files-src="/seq/ip/ip"
            frame-count="90"
            start="30% top"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import AppAnimList from '@/components/ui/AppAnimList'
import AppSequence from '@/components/ui/AppSequence'
export default {
  components: { AppSequence, AppAnimList },
  data () {
    return {
      propList: ['Металл 3мм', 'Прочное крепление к фундаменту', 'Каленое черное стекло 100мм', 'Устойчивость к погодным условиям по стандарту IP68']
    }
  },

  mounted () {
    this.makePin('.case__pin-content', '.case')
  },

  methods: {

  }
}
</script>

<style lang="sass" scoped>
.case
  position: relative
  height: 2500px
  padding-top: 70px

  &__item
    margin-bottom: 100px

  &__title
    text-align: start

  &__list
    list-style: none

    &-item
      font-size: 28px
      height: 100px
      margin-left: 120px
      display: flex
      align-items: center
      justify-content: flex-start
      text-align: start

    &-title
      color: #dd3273
      display: block
      width: 100%
      transform-origin: 0 0
      margin-left: 50px
      font-size: 30px

  &__film-wrapper
    position: absolute
    left: 200px
    top: -70px

  &__pin-content
    position: relative
    width: 100%
</style>
