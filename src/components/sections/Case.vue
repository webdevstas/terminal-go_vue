<template>
  <section class="case">
    <div class="case__pin-content">
      <h2 class="section-title case__title fade-in">Антивандальный корпус</h2>
      <div class="case__list-wrapper">
        <div class="case__item">
          <AppAnimList :items="propList" name="case"/>
        </div>
        <div class="case-film__wrapper reveal">
          <canvas id="ip__frame"></canvas>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppAnimList from '@/components/ui/AppAnimList'
export default {
  components: { AppAnimList },
  data () {
    return {
      propList: ['Металл 4мм', 'Прочное крепление к фундаменту', 'Каленое черное стекло 100мм', 'Устойчивость к погодным условиям по стандарту IP65']
    }
  },

  mounted () {
    this.gsap.to('.case__pin-content', {
      scrollTrigger: {
        trigger: '.case',
        pin: '.case__pin-content',
        // markers: true,
        start: 'top top',
        end: 'bottom bottom'
      }
    })

    this.startTermAnim()
  },

  methods: {
    startTermAnim () {
      const canvas = document.getElementById('ip__frame')
      const context = canvas.getContext('2d')

      canvas.width = document.documentElement.clientWidth - 200
      canvas.height = document.documentElement.clientHeight

      const frameCount = 90
      const currentFrame = index => (
        `/seq/ip/ip(${index}).png`
      )

      const images = []
      const film = {
        frame: 0
      }

      for (let i = 1; i <= frameCount; i++) {
        const img = new Image()
        img.src = currentFrame(i)
        images.push(img)
      }

      this.gsap.to(film, {
        frame: frameCount - 1,
        snap: 'frame',
        scrollTrigger: {
          trigger: '.case',
          scrub: 0.1,
          start: '500 top',
          end: 'bottom bottom'
          // markers: true
        },
        onUpdate: render // use animation onUpdate instead of scrollTrigger's onUpdate,
      })

      images[0].onload = render

      function render () {
        context.clearRect(0, 0, canvas.width, canvas.height)
        context.drawImage(images[film.frame], 0, 0, canvas.width, canvas.height)
      }
    }
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

  &-film__wrapper
    position: absolute
    left: 200px
    top: -70px

  &__pin-content
    position: relative
    width: 100%
</style>
