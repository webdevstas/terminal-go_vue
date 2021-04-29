<template>
  <section class="screen">
    <h2 class="section-title fade-in">Большой и чёткий экран</h2>
    <div class="screen__pin-content">
        <video id="video-frame" src="static/1SEQ_Screen_Street.mp4" muted></video>
<!--        <img src="@/assets/img/half-screen.png" alt="" class="screen-img">-->
      <div class="screen__left-cards">
        <app-card class="screen__card"
                  :style="{background: 'linear-gradient(90deg, rgba(196,194,0,0.5) 0%, rgba(0,182,208,0.5) 100%)'}">
          <h2 class="card__title">Диагональ 65"</h2>
        </app-card>
        <app-card class="screen__card"
                  :style="{background: 'linear-gradient(90deg, rgba(0,218,240,0.5) 0%, rgba(166,0,106,0.5) 100%)'}">
          <h2 class="card__title">Разрешение 4к</h2>
        </app-card>
        <app-card class="screen__card"
                  :style="{background: 'linear-gradient(90deg, rgba(207,0,139,0.5) 0%, rgba(0,29,215,0.5) 100%)'}">
          <h2 class="card__title">Мульти soft-touch</h2>
        </app-card>
        <app-card class="screen__card"
                  :style="{background: 'linear-gradient(90deg, rgba(0,196,39,0.5) 0%, rgba(208,0,0,0.5) 100%)'}">
          <h2 class="card__title">Яркость 5000 кд/м<sup>2</sup></h2>
        </app-card>
        <app-card class="screen__card"
                  :style="{background: 'linear-gradient(90deg, rgba(240,237,0,0.5) 0%, rgba(0,0,112,0.5) 100%)'}">
          <h2 class="card__title">Смена яркости день/ночь</h2>
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
    this.makePin('.screen__pin-content', '.screen', false, '+120 top', '95% bottom')
    this.playVideo()
    this.cards = this.gsap.utils.toArray('.card.screen__card')
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
  height: 2000px

  &-grid
    display: grid
    grid-template-columns: repeat(3, 1fr)
    position: relative

  &__left-cards
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

  &__title
    font-size: 28px

#video-frame
  position: absolute
  top: 0
  width: auto
  transform: translateX(-50%)
  left: 50%
  z-index: 1
</style>
