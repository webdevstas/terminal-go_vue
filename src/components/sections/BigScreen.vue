<template>
  <section class="big-screen">
    <h2 class="main-props__title">Городские экскурсии</h2>
    <div class="big-screen__container reveal">
      <img alt="" src="@/assets/img/big-screen.jpg" class="big-screen__terminal">
      <ul class="big-screen__items-list">
        <li class="big-screen__item"><img src="@/assets/img/screen-item-1.jpg" alt=""
                                          class="big-screen__item-img"></li>
        <li class="big-screen__item"><img src="@/assets/img/screen-item-2.jpg" alt=""
                                          class="big-screen__item-img"></li>
        <li class="big-screen__item"><img src="@/assets/img/screen-item-3.jpg" alt=""
                                          class="big-screen__item-img"></li>
        <li class="big-screen__item"><img src="@/assets/img/screen-item-4.jpg" alt=""
                                          class="big-screen__item-img"></li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  mounted () {
    const screenItems = this.gsap.utils.toArray('.big-screen__item')
    screenItems.forEach(item => {
      this.gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          scrub: true,
          // markers: true,
          start: '100 bottom',
          end: '+=100'
        },
        opacity: 0,
        y: 100,
        scale: 1.5
      })
    })
  }
}
</script>

<style lang="sass" scoped>
.big-screen
  &__container
    width: 1010px
    max-width: 100%
    margin: auto
    position: relative

    & img
      max-width: 100%

  &__terminal
    display: block
    position: relative
    left: 50%
    transform: translateX(-50%)

  &__items-list
    list-style: none
    position: absolute
    //top: 0
    left: 50%
    top: 120px
    transform: translateX(-50%)
    padding: 0

</style>
