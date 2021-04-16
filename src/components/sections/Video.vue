<template>
  <section class="video">
    <video id="video-frame" src="/1SEQ_Screen_Street.mp4"></video>
  </section>
</template>

<script>
export default {
  mounted () {
    this.gsap.to('#video-frame', {
      scrollTrigger: {
        trigger: '#video-frame',
        // markers: true,
        start: 'top top',
        onEnter: () => {
          document.getElementById('video-frame').play()
        }
      }
    })
  }
}
</script>

<style lang="sass" scoped>
.video
  position: relative
  height: 110vh
  padding: 0
#video-frame
  position: absolute
  left: 0
  top: 0
  width: 100%
  height: auto
</style>
