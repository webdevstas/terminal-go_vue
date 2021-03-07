<template>
    <section class="first-section">
      <h1 class="first-section__title gradient-text animated" data-grad-from="#3E97D1" data-grad-to="#DB0058">
        Интерактивная городская навигационная система</h1>
      <div class="first-section__pin-content">
        <img src="@/assets/img/10001.png" alt="" class="first-section__img">
      </div>
      <ul class="first-section__list">
        <li class="first-section__list-item" style="opacity: 1;">В рамках программы "Умный город"...
        </li>
        <li class="first-section__list-item">в городе Сочи установлены
          современные информационные терминалы.
        </li>
        <li class="first-section__list-item">Более 200 единиц.</li>
        <li class="first-section__list-item">В самых знаковых местах.</li>
      </ul>
    </section>
</template>

<script>

export default {
  mounted () {
    // eslint-disable-next-line new-cap
    const tl = new this.gsap.timeline()

    const firstScreenAnim = tl.fromTo('.first-section__title', {
      opacity: 0,
      y: -200
    }, {
      delay: 2,
      opacity: 1,
      y: 0
    }).fromTo('.first-section__img', {
      opacity: 0,
      x: -1000
    }, {
      opacity: 1,
      x: 0
    }).from('.first-section__list-item', {
      opacity: 0,
      x: -100,
      y: 100,
      stagger: 0.5
    }).pause()

    this.ScrollTrigger.create({
      trigger: '.first-section',
      // markers: true,
      toggleActions: 'play pause complete reset',
      animation: firstScreenAnim
    })
  }
}
</script>

<style lang="sass" scoped>
.first-section
  display: grid
  grid-template-columns: 1fr 1fr
  align-items: start

  &__title
    font-size: 38px
    width: 400px
    font-weight: bold
    color: #00c4ff
    grid-column: 1/2
    grid-row: 1/2
    justify-self: start

  &__pin-content
    align-self: start
    justify-self: center
    grid-row: 1/3
    width: fit-content

  &__img
    height: 800px
    display: block
    margin: auto

  &__list
    list-style: none
    grid-row: 2/3
    justify-self: center

    &-item
      font-size: 32px
      height: 120px
      display: flex
      align-items: center
      justify-content: flex-start
      text-align: left
</style>
