<template>
  <section class="integrations">
    <div class="integrations__pin-content">
      <div class="integrations__grid">
        <div class="integrations__col">
          <h2 class="section-title fade-in">
            Возможные интеграции
          </h2>
          <AppAnimList
            :items="propList"
            name="integrations"
          />
        </div>
        <div class="integrations__col">
          <figure class="integrations__img reveal fade-in">
            <img
              src="@/assets/img/travels.png"
              alt=""
            >
            <figcaption id="integrations__from" />
            <figcaption id="integrations__to" />
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import AppAnimList from '@/components/ui/AppAnimList.vue'
import {defineComponent} from "vue"

export default defineComponent({
  components: { AppAnimList },

  data () {
    return {
      propList: ['Диспетчерские службы города', 'Яндекс, Booking', 'Kassir.ru, Библио Глобус', 'Экскурсионные Бюро'],
      cities: ['Москва', 'Ярославль', 'Санкт-Петербург', 'Новосибирск', 'Краснодар', 'Нижневартовск', 'Мурманск', 'Минск', 'Новокузнецк', 'Волгоград', 'Владивосток']
    }
  },

  mounted () {
    this.$makePin('.integrations__pin-content', '.integrations')
    const tl = this.makeTl()
    this.startCitiesAnim(tl, '#integrations__to', this.cities)
  },

  methods: {
    makeTl () {
      return this.$gsap.timeline({
        repeat: -1,
        repeatDelay: 1,
        scrollTrigger: {
          trigger: '.integrations__img',
          // markers: true,
          start: 'top center'
        }
      })
    },

    startCitiesAnim(tl: GSAPTimeline, el: string, arr: string[]): GSAPTimeline {
      const insideArr = arr.slice(0)
      tl.to('#integrations__from', {
        duration: 1,
        text: 'Сочи'
      })
      if (!insideArr.length) {
        return tl
      } else {
        tl.to(el, {
          duration: 1,
          text: insideArr[0],
          yoyo: true,
          repeat: 1
        })

        insideArr.shift()
        return this.startCitiesAnim(tl, el, insideArr)
      }
    }
  }
})
</script>

<style lang="sass" scoped>
.integrations
  height: 1500px

  &__grid
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

.section-title
  text-align: left
</style>
