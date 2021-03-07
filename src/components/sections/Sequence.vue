<template>
  <section class="sequence">
    <div class="sequence__pin-content">
      <canvas id="sequence__frame"></canvas>
    </div>
  </section>
</template>

<script>
export default {
  mounted () {
    const canvas = document.getElementById('sequence__frame')
    const context = canvas.getContext('2d')

    canvas.width = document.documentElement.clientWidth - 60
    canvas.height = document.documentElement.clientHeight

    const frameCount = 112
    const currentFrame = index => (
      `/seq/seq${index}.png`
    )

    const images = []
    const film = {
      frame: 0
    }

    for (let i = 0; i <= frameCount; i++) {
      const img = new Image()
      img.src = currentFrame(i)
      images.push(img)
    }

    this.gsap.to(film, {
      frame: frameCount - 1,
      snap: 'frame',
      scrollTrigger: {
        trigger: '.sequence',
        scrub: 0.5,
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
.sequence
  margin-top: 50px
  height: 2000px
</style>
