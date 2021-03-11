<template>
  <div class="modal" v-if="visibility" :style="modalSize">
    <h2 class="modal-title" v-if="title">{{ title }}</h2>
    <div class="modal-content">
      <slot></slot>
    </div>
  </div>
  <div class="backdrop" v-if="visibility" @click="$emit('close')"></div>
</template>

<script>
export default {
  props: ['title', 'visibility', 'modalSize'],
  emits: ['close'],
  data () {
    return {}
  }
}
</script>

<style lang="sass" scoped>
.modal
  position: fixed
  left: 50%
  top: 50%
  transform: translate(-50%, -50%)
  background-color: rgba(255, 255, 255, 0.8)
  min-width: 500px
  min-height: 300px
  border-radius: 0.25rem
  z-index: 1000
  padding: 20px

  &-title
    color: #070707
    text-align: center

  &-content
    position: relative
    top: 50%
    transform: translateY(-50%)
.backdrop
  position: fixed
  left: 0
  top: 0
  width: 100%
  height: 100%
  background-color: rgba(0, 0, 0, 0.8)
  z-index: 900
  backdrop-filter: blur(10px)
</style>
