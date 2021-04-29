<template>
  <section class="excursions">
    <div class="excursions-pin__content">
      <div class="excursions-grid">
<!--        <div class="excursions-grid__col">-->
        <h2 class="section-title fade-in">Управление городскими экскурсиями</h2>
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
<!--        </div>-->
<!--        <div class="excursions-grid__col">-->
<!--          <app-card style="background: linear-gradient(90deg, #4b6cb7 0%, #182848 100%)">-->
<!--            <h2 class="section-title excursions__title fade-in">Городские экскурсии</h2>-->
<!--            <AppAnimList :items="propList" name="excursions" style="color: #fff"/>-->
<!--          </app-card>-->
<!--        </div>-->
      </div>
    </div>
  </section>
</template>

<script>
// import AppAnimList from '@/components/ui/AppAnimList'
// import AppCard from '@/components/ui/AppCard'

export default {
  components: {
    // AppCard,
    // AppAnimList
  },

  data () {
    return {
      propList: [
        'Собственный сервис управления городскими экскурсиями',
        'Возможность интеграции со сторонними сервисами',
        'Оплата через встроенный терминал',
        'Отслеживание статистики'
      ]
    }
  },

  mounted () {
    // this.makePin('.excursions-pin__content', '.excursions')
    const screenItems = this.gsap.utils.toArray('.excursions__item')
    screenItems.forEach(item => {
      this.gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          scrub: true,
          // markers: true,
          start: '350 bottom',
          end: '+=100'
        },
        opacity: 0,
        y: -100,
        scale: 1.5
      })
    })
  }
}
</script>

<style lang="sass">
.excursions
  padding-top: 70px
  //height: 2000px
  &-grid
    display: grid
    grid-template-columns: 1fr
    justify-items: center

  &__title
    text-align: center
    font-family: 'Caveat'
    font-size: 62px
    color: #fff

  &__container
    position: relative
    width: 549px

    & img
      max-width: 100%

  &__terminal
    display: block
    position: relative
    left: 0

  &__items-list
    list-style: none
    position: absolute
    left: 26px
    top: 119px
    padding: 0
    width: 496px

  &__item
    height: max-content
    display: block

    & img
      width: 100%
      display: block

</style>
