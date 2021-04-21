<template>
  <div class="screen">
    <div class="screen-pin__content">
      <div class="screen-grid">
        <div class="screen-col">

        </div>
        <div class="screen-col"><h2 class="section-title">Большой и чёткий экран</h2></div>
        <div class="screen-col">
          <app-card bgcolor="linear-gradient(90deg, rgba(173,0,55,1) 0%, rgba(0,117,215,1) 100%)">
            <h2 class="card-title">Разрешение 4к</h2>
          </app-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppCard from '@/components/ui/AppCard'

export default {
  components: { AppCard },

  mounted () {
    this.gsap.to('.screen-pin__content', {
      scrollTrigger: {
        trigger: '.screen',
        markers: true,
        pin: '.screen-pin__content',
        start: 'top top',
        end: 'bottom bottom'
      }
    })
  },

  data () {
    return {
      propListLeft: ['Разрешение 4к', 'Диагональ 65"', 'Мульти soft-touch', 'Смена яркости день/ночь']
    }
  }
}
</script>

<style lang="sass">
.screen
  height: 2000px
  padding-top: 70px

  &-grid
    display: grid
    grid-template-columns: repeat(3, 1fr)
.card-title
  font-size: 28px
</style>
