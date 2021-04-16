<template>
    <section class="first-section">
      <h1 class="first-section__title gradient-text animated">
        Интерактивная городская навигационная система</h1>
      <div class="sequence__pin-content">
        <canvas id="start__frame"></canvas>
      </div>
    </section>
</template>

<script>

export default {
  mounted () {
    const canvas = document.getElementById('start__frame')
    const context = canvas.getContext('2d')

    canvas.width = document.documentElement.clientWidth - 200
    canvas.height = document.documentElement.clientHeight

    const frameCount = 180
    const currentFrame = index => (
      `/seq/start/SEQ_Start(${index}).png`
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
        trigger: '.first-section',
        scrub: 0.1,
        pin: '.sequence__pin-content',
        start: 'top top',
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
</script>

<style lang="sass" scoped>
.first-section
  height: 3000px
  &__title
    font-size: 38px
    font-weight: bold
    color: #00c4ff
    text-align: center
</style>
