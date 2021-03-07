<template>
  <section class="main-props fade-out">
    <h2 class="main-props__title fade-in gradient-text" data-grad-from="#DB0058" data-grad-to="#3E97D1">Основные
      характеристики</h2>
    <div class="main-props__list-wrapper">
      <div class="main-props__item">
        <h2 class="main-props__list-title">Антивандальный корпус</h2>
        <ul class="main-props__list">
          <li class="main-props__list-item">
            Металл 4мм
          </li>
          <li class="main-props__list-item">
            Прочное крепление к фундаменту
          </li>
          <li class="main-props__list-item">
            Каленое черное стекло 100мм
          </li>
          <li class="main-props__list-item">
            Устойчивость к погодным условиям по стандарту IP65
          </li>
        </ul>
      </div>
      <div class="main-props__item">
        <h2 class="main-props__list-title">Большой и чёткий экран</h2>
        <ul class="main-props__list">
          <li class="main-props__list-item">
            Разрешение 4к
          </li>
          <li class="main-props__list-item">
            Диагональ 65
          </li>
          <li class="main-props__list-item">
            Мульти soft-touch
          </li>
          <li class="main-props__list-item">
            Смена яркости день/ночь
          </li>
        </ul>
      </div>
      <div class="main-props__item">
        <h2 class="main-props__list-title">Дополнительные возможности</h2>
        <ul class="main-props__list">
          <li class="main-props__list-item">
            LED подсветка RGB
          </li>
          <li class="main-props__list-item">
            Бесконтактная оплата NFC
          </li>
          <li class="main-props__list-item">
            Термопринтер
          </li>
          <li class="main-props__list-item">
            Индукционная петля для людей с
            ограниченными возможностями
          </li>
        </ul>
      </div>
      <div class="main-props__item">
        <h2 class="main-props__list-title">Возможные интеграции</h2>
        <ul class="main-props__list">
          <li class="main-props__list-item">
            Диспетчерские службы
            города
          </li>
          <li class="main-props__list-item">
            Яндекс, Booking
          </li>
          <li class="main-props__list-item">
            Kassir.ru, Библио Глобус
          </li>
          <li class="main-props__list-item">
            Экскурсионные
            Бюро
          </li>
        </ul>
      </div>
    </div>
    <div class="main-props__pin-content">
      <img src="@/assets/img/second-terminal.png" alt="" class="main-props__img">
      <img src="@/assets/img/hand_w_phone.png" alt="" class="main-props__hand">
    </div>
  </section>
</template>

<script>
export default {
  mounted () {
    // Закрепим контент, коллбэки включают и отключают движение за курсором
    this.ScrollTrigger.create({
      trigger: '.main-props',
      pin: '.main-props__pin-content',
      start: 'top top',
      end: 'bottom bottom',
      // markers: true,
      pinSpacing: false
    })

    const propItems = this.gsap.utils.toArray('.main-props__list-item')
    const items = this.gsap.utils.toArray('.main-props__item')

    // Анимируем появление характеристик
    propItems.forEach((item) => {
      this.gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          // markers: true,
          id: 'in',
          scrub: 1,
          start: 'top center',
          end: '+=50 center',
          onLeave: () => {
            this.gsap.fromTo(item, {
              borderBottom: 'none',
              duration: 1
            }, {
              borderBottom: '1px solid white',
              duration: 1,
              delay: 0.5
            })
          }
        },
        opacity: 0,
        x: -15,
        y: -50
      })
    })

    // Поворачиваем и убираем заголовок секции
    items.forEach((item) => {
      this.gsap.to(item.childNodes[0], {
        scrollTrigger: {
          trigger: item,
          // markers: true,
          id: 'title',
          start: 'top center',
          end: 'bottom center',
          toggleActions: 'play resume repeat reverse'
        },
        rotation: -90,
        y: item.offsetHeight,
        duration: 0.8
      })
    })
  }
}
</script>

<style lang="sass" scoped>
.main-props
  display: grid
  grid-template-columns: 1fr 1fr

  &__item
    margin-bottom: 100px

  &__title
    text-align: center
    margin-bottom: 100px
    font-weight: bold
    color: #00c4ff
    grid-column: 1/3
    font-size: 32px

  &__img
    height: 500px
    display: block
    margin: auto

  &__hand
    height: 150px
    width: auto
    position: absolute
    left: 50%
    top: 250px

  &__pin-content
    position: relative

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

</style>
