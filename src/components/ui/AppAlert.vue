<template>
  <div
    v-if="visible"
    :class="['alert', msgType]"
    @click="closeAlert"
  >
    <h2
      v-if="title"
      :class="['alert-title', msgType]"
    >
      {{ title }}
    </h2>
    <p
      v-if="message"
      :class="['alert-text', msgType]"
    >
      {{ message }}
    </p>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue"

export default defineComponent({
  props: {
    msgType: {type: String, default: 'success'},
    title: {type: String, default: ''},
    message: {type: String, default: ''},
    visibility: {type: Boolean, default: false}
  },
  emits: ['alertClosed'],

  data() {
    return {
      visible: this.visibility,
      timeout: 0
    }
  },

  watch: {
    visibility: function () {
      this.visibility ? this.showAlert() : this.closeAlert()
    }
  },

  methods: {
    showAlert() {
      const openPromise = new Promise<void>((resolve, reject) => {
        this.visible = true
        resolve()
      })
      openPromise.then(() => {
        this.$gsap.to('.alert', {
          y: 600,
          onComplete: () => {
            this.timeout = setTimeout(this.closeAlert, 5000)
          }
        })
      })
    },

    closeAlert() {
      this.$gsap.to('.alert', {
        y: -600,
        onComplete: () => {
          this.visible = false
          this.$emit('alertClosed')
          clearTimeout(this.timeout)
        }
      })
    }
  }
})
</script>

<style lang="sass" scoped>
.alert
  position: fixed
  top: -500px
  left: 50%
  transform: translateX(-50%)
  background-color: #ececec
  width: 400px
  height: auto
  padding: 10px 20px
  border-radius: 0.25rem

  &.success
    border-left: 10px solid #28a745

  &.danger
    border-left: 10px solid #a72828

  &-title
    &.success
      color: #28a745

    &.danger
      color: #a72828

  &-text
    color: #070707

</style>
