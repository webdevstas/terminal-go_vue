<template>
  <section class="integrations">
    <div class="integrations-pin__content">
      <div class="integrations-grid">
        <div class="integrations-col">
          <h2 class="section-title fade-in">Возможные интеграции</h2>
          <AppAnimList :items="propList" name="integrations"/>
        </div>
        <div class="integrations-col">
          <figure class="integrations__img reveal">
            <img src="@/assets/img/travels.png" alt="">
            <figcaption id="integrations__from"></figcaption>
            <figcaption id="integrations__to"></figcaption>
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppAnimList from '@/components/ui/AppAnimList'

export default {
  components: { AppAnimList },

  mounted () {
    this.makePin('.integrations-pin__content', '.integrations')
    this.startCitiesAnim()
  },

  data () {
    return {
      propList: ['Диспетчерские службы города', 'Яндекс, Booking', 'Kassir.ru, Библио Глобус', 'Экскурсионные Бюро']
    }
  },

  methods: {
    startCitiesAnim () {
      const from = document.querySelector('#integrations__from')
      const to = document.querySelector('#integrations__to')
      const master = this.gsap.timeline({
        repeat: -1,
        repeatDelay: 1,
        scrollTrigger: {
          trigger: '.integrations__img',
          // markers: true,
          start: 'top center'
        }
      })

      master.to(from, {
        duration: 1,
        text: 'Сочи'
      })
        .to(to, {
          duration: 1,
          text: 'Москва',
          yoyo: true,
          repeat: 1
        })
        .to(to, {
          duration: 1,
          text: 'Санкт-Петербург',
          yoyo: true,
          repeat: 1
        })
        .to(to, {
          duration: 1,
          text: 'Ярославль',
          yoyo: true,
          repeat: 1
        })
        .to(to, {
          duration: 1,
          text: 'Новосибирск',
          yoyo: true,
          repeat: 1
        })
        .to(to, {
          duration: 1,
          text: 'Краснодар',
          yoyo: true,
          repeat: 1
        })
        .to(to, {
          duration: 1,
          text: 'Нижневартовск',
          yoyo: true,
          repeat: 1
        })
        .to(to, {
          duration: 1,
          text: 'Мурманск',
          yoyo: true,
          repeat: 1
        })
        .to(to, {
          duration: 1,
          text: 'Минск',
          yoyo: true,
          repeat: 1
        })
        .to(to, {
          duration: 1,
          text: 'Новокузнецк',
          yoyo: true,
          repeat: 1
        })
        .to(to, {
          duration: 1,
          text: 'Волгоград',
          yoyo: true,
          repeat: 1
        })
        .to(to, {
          duration: 1,
          text: 'Владивосток',
          yoyo: true,
          repeat: 1
        })
    }
  }
}
</script>

<style lang="sass" scoped>
.integrations
  height: 1500px
  &-grid
    display: grid
    grid-template-columns: 2fr 1fr
    position: relative
    padding-top: 70px

  &__img
    position: relative
    width: 80%

#integrations__from
  position: absolute
  width: fit-content
  height: fit-content
  top: 28%
  left: 12%
  color: #000
  font-size: 20px

#integrations__to
  position: absolute
  width: fit-content
  height: fit-content
  top: 35%
  left: 12%
  color: #000
  font-size: 20px
</style>
