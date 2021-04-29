<template>
  <div>
    <canvas :id="id"></canvas>
  </div>
</template>

<script>
export default {
  props: ['id', 'canvasWidth', 'canvasHeight', 'frameCount', 'filesSrc', 'trigger', 'start', 'end'],
  mounted () {
    const canvas = document.getElementById(this.id)
    const context = canvas.getContext('2d')

    canvas.width = this.canvasWidth || document.documentElement.clientWidth - 200
    canvas.height = this.canvasHeight || document.documentElement.clientHeight

    const frameCount = this.frameCount
    const currentFrame = index => (
      `static${this.filesSrc}(${index}).png`
    )

    const images = []
    const film = {
      frame: 0
    }

    const firstImg = new Image()
    firstImg.src = currentFrame(1)
    images.push(firstImg)

    this.gsap.to(canvas, {
      scrollTrigger: {
        trigger: canvas,
        // markers: true,
        start: '-1000 center',
        end: 'bottom bottom',
        onEnter: () => {
          for (let i = 2; i <= frameCount; i++) {
            const img = new Image()
            img.src = currentFrame(i)
            images.push(img)
          }
        }
      }
    })

    this.gsap.to(film, {
      frame: frameCount - 1,
      snap: 'frame',
      scrollTrigger: {
        trigger: this.trigger,
        scrub: 0.1,
        start: this.start || 'top top',
        end: this.end || 'bottom bottom'
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

<style scoped>

</style>
