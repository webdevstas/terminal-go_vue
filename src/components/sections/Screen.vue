<template>
  <section class="screen">
    <h2 class="section-title fade-in">Большой и чёткий экран</h2>
    <div class="screen-pin__content">
      <div class="screen-img__wrap reveal">
        <video id="video-frame" src="static/1SEQ_Screen_Street.mp4" muted></video>
        <img src="@/assets/img/half-screen.png" alt="" class="screen-img">
      </div>
      <div class="screen-left__cards">
        <app-card class="screen-card"
                  :style="{background: 'linear-gradient(90deg, rgba(196,194,0,0.5) 0%, rgba(0,182,208,0.5) 100%)'}">
          <h2 class="card-title">Диагональ 65"</h2>
        </app-card>
        <app-card class="screen-card"
                  :style="{background: 'linear-gradient(90deg, rgba(0,218,240,0.5) 0%, rgba(166,0,106,0.5) 100%)'}">
          <h2 class="card-title">Разрешение 4к</h2>
        </app-card>
        <app-card class="screen-card"
                  :style="{background: 'linear-gradient(90deg, rgba(207,0,139,0.5) 0%, rgba(0,29,215,0.5) 100%)'}">
          <h2 class="card-title">Мульти soft-touch</h2>
        </app-card>
        <app-card class="screen-card"
                  :style="{background: 'linear-gradient(90deg, rgba(0,196,39,0.5) 0%, rgba(208,0,0,0.5) 100%)'}">
          <h2 class="card-title">Яркость 6000 кд/м<sup>2</sup></h2>
        </app-card>
        <app-card class="screen-card"
                  :style="{background: 'linear-gradient(90deg, rgba(240,237,0,0.5) 0%, rgba(0,0,112,0.5) 100%)'}">
          <h2 class="card-title">Смена яркости день/ночь</h2>
        </app-card>
      </div>
    </div>
  </section>
</template>

<script>
import AppCard from '@/components/ui/AppCard'

export default {
  components: { AppCard },

  mounted () {
    this.makePin('.screen-pin__content', '.screen', false, '+120 top')
    this.playVideo()
    this.cards = this.gsap.utils.toArray('.card.screen-card')
    this.scaleOutScreen()
    this.startCardAnim()
  },

  data () {
    return {
      cards: []
    }
  },

  methods: {
    startCardAnim () {
      this.cards.forEach(card => {
        this.gsap.to(card, {
          x: 1000,
          scrollTrigger: {
            trigger: card,
            // markers: true,
            scrub: 1,
            start: 'center top',
            end: '+=200'
          }
        })
      })
    },

    playVideo () {
      this.gsap.to('.screen', {
        scrollTrigger: {
          trigger: '.screen',
          start: '100 top',
          onEnter: () => {
            document.getElementById('video-frame').play()
          }
        }
      })
    },

    scaleOutScreen () {
      this.gsap.from('.screen-img__wrap', {
        scale: 1.4,
        y: 220,
        scrollTrigger: {
          trigger: '.screen-img__wrap',
          scrub: true,
          // markers: true,
          start: '100 top',
          end: 'bottom bottom'
        }
      })
    }
  }
}
</script>

<style lang="sass" scoped>
.screen
  height: 2200px

  &-img
    width: 100%
    height: auto
    z-index: 5
    position: relative

    &__wrap
      position: absolute
      transform: translateX(50%)
      right: 50%
      display: block
      width: 78vw

  &-grid
    display: grid
    grid-template-columns: repeat(3, 1fr)
    position: relative

  &-left__cards
    display: flex
    position: relative
    flex-direction: column
    width: 25%
    left: 50px
    top: 120px

.card
  margin-bottom: 50px
  backdrop-filter: blur(10px)
  background-blend-mode: screen
  position: relative
  left: -1000px
  top: 0
  z-index: 100
  color: #fff

  &-title
    font-size: 28px

#video-frame
  position: absolute
  top: 0
  width: 99%
  transform: translateX(-50%)
  left: 50%
  z-index: 1
</style>
