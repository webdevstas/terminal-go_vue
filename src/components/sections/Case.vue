<template>
  <section class="case">
    <h2 class="case__title">Антивандальный корпус</h2>
    <div class="case__list-wrapper">
      <div class="case__item">
        <ul class="case__list">
          <li class="case__list-item">
            Металл 4мм
          </li>
          <li class="case__list-item">
            Прочное крепление к фундаменту
          </li>
          <li class="case__list-item">
            Каленое черное стекло 100мм
          </li>
          <li class="case__list-item">
            Устойчивость к погодным условиям по стандарту IP65
          </li>
        </ul>
      </div>
      <div class="case__pin-content">
        <canvas id="ip__frame"></canvas>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted () {
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
        pin: '.case__pin-content',
        start: 'top top',
        end: 'bottom bottom',
        markers: true
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
</script>

<style lang="sass" scoped>
.case
  position: relative
  height: 150vh
  &__item
    margin-bottom: 100px

  &__title
    text-align: center
    margin-bottom: 100px
    font-weight: bold
    color: #00c4ff
    grid-column: 1/3
    font-size: 32px

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

  &__pin-content
    position: absolute
    left: 200px
    top: 0
  width: 100%

#ip__frame

</style>
