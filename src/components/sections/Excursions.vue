<template>
  <section class="excursions">
    <div class="excursions-pin__content">
      <div class="excursions-grid">
        <div class="excursions-grid__col">
          <div class="excursions__container reveal">
            <img alt="" src="@/assets/img/term-screen_alpha.png" class="excursions__terminal">
            <ul class="excursions__items-list">
              <li class="excursions__item"><img src="@/assets/img/screen-item-1.jpg" alt=""
                                                class="excursions__item-img"></li>
              <li class="excursions__item"><img src="@/assets/img/screen-item-2.jpg" alt=""
                                                class="excursions__item-img"></li>
              <li class="excursions__item"><img src="@/assets/img/screen-item-3.jpg" alt=""
                                                class="excursions__item-img"></li>
              <li class="excursions__item"><img src="@/assets/img/screen-item-4.jpg" alt=""
                                                class="excursions__item-img"></li>
            </ul>
          </div>
        </div>
        <div class="excursions-grid__col">
          <app-card style="background: linear-gradient(90deg, #4b6cb7 0%, #182848 100%); height: 100%">
            <h2 class="section-title excursions__title fade-in">Городские экскурсии</h2>
            <AppAnimList :items="propList" name="excursions" style="color: #fff"/>
          </app-card>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
import AppAnimList from '@/components/ui/AppAnimList'
import AppCard from '@/components/ui/AppCard'

export default {
  components: {
    AppCard,
    AppAnimList
  },

  data () {
    return {
      propList: [
        'Собственный сервис управления городскими экскурсиями',
        'Возможность интеграции со сторонними сервисами',
        'Оплата через встроенный терминал',
        'Отслеживание статистики'
      ],
      listAnimOptions: {

      }
    }
  },

  mounted () {
    const screenItems = this.gsap.utils.toArray('.excursions__item')
    screenItems.forEach(item => {
      this.gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          scrub: true,
          // markers: true,
          start: '150 bottom',
          end: '+=100'
        },
        opacity: 0,
        y: 100,
        scale: 1.5
      })
    })

    this.gsap.to('.excursions-pin__content', {
      scrollTrigger: {
        trigger: '.excursions',
        pin: '.excursions-pin__content'
      }
    })
  }
}
</script>

<style lang="sass">
.excursions
  padding-top: 100px

  &-grid
    display: grid
    grid-template-columns: 1fr 2fr

  &__title
    text-align: center
    font-family: 'Caveat'
    font-size: 62px
    color: #fff

  &__container
    position: relative
    width: 400px

    & img
      max-width: 100%

  &__terminal
    display: block
    position: relative
    left: 0

  &__items-list
    list-style: none
    position: absolute
    left: 19px
    top: 86px
    padding: 0
    width: 362px

  &__item
    height: max-content
    display: block

    & img
      width: 100%
      display: block

</style>
