<template>
  <section class="travels">
    <h2 class="travels__title gradient-text" data-grad-from="#DB0058" data-grad-to="#3E97D1">Интеграция с сервисом
      Яндекс Путешествия</h2>
    <figure class="travels__img reveal">
      <img src="@/assets/img/travels.png" alt="">
      <figcaption id="travels__from"></figcaption>
      <figcaption id="travels__to"></figcaption>
    </figure>
  </section>
</template>

<script>
export default {
  mounted () {
    const from = document.querySelector('#travels__from')
    const to = document.querySelector('#travels__to')
    const master = this.gsap.timeline({
      repeat: -1,
      repeatDelay: 1,
      scrollTrigger: {
        trigger: '.travels__img',
        // markers: true,
        start: 'top center'
      }
    })

    this.ScrollTrigger.create({
      trigger: '.travels__title',
      // markers: true,
      pin: true,
      start: '-100 top',
      endTrigger: '.travels',
      end: '+=700'
    })

    master.to(from, {
      duration: 2,
      text: 'Сочи'
    })
      .to(to, {
        duration: 2,
        text: 'Москва',
        yoyo: true,
        repeat: 1
      })
      .to(to, {
        duration: 2,
        text: 'Санкт-Петербург',
        yoyo: true,
        repeat: 1
      })
      .to(to, {
        duration: 2,
        text: 'Ярославль',
        yoyo: true,
        repeat: 1
      })
      .to(to, {
        duration: 2,
        text: 'Новосибирск',
        yoyo: true,
        repeat: 1
      })
      .to(to, {
        duration: 2,
        text: 'Краснодар',
        yoyo: true,
        repeat: 1
      })
      .to(to, {
        duration: 2,
        text: 'Нижневартовск',
        yoyo: true,
        repeat: 1
      })
      .to(to, {
        duration: 2,
        text: 'Мурманск',
        yoyo: true,
        repeat: 1
      })
      .to(to, {
        duration: 2,
        text: 'Минск',
        yoyo: true,
        repeat: 1
      })
      .to(to, {
        duration: 2,
        text: 'Новокузнецк',
        yoyo: true,
        repeat: 1
      })
      .to(to, {
        duration: 2,
        text: 'Волгоград',
        yoyo: true,
        repeat: 1
      })
      .to(to, {
        duration: 2,
        text: 'Владивосток',
        yoyo: true,
        repeat: 1
      })
  }
}
</script>

<style lang="sass" scoped>
.travels
  display: grid
  grid-template-columns: 1fr
  grid-template-rows: auto auto
  justify-items: center
  position: relative
  padding-top: 200px

  &__img
    position: relative

  &__title
    position: absolute
    width: 450px
    font-size: 36px
    left: 20%
    top: 100px
    justify-self: start

#travels__from
  position: absolute
  width: fit-content
  height: fit-content
  top: 28%
  left: 12%
  color: #000
  font-size: 20px

#travels__to
  position: absolute
  width: fit-content
  height: fit-content
  top: 35%
  left: 12%
  color: #000
  font-size: 20px
</style>
