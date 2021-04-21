<template>
  <div class="card" :style="{'background': bgcolor}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['bgcolor']
}
</script>

<style lang="sass" scoped>
.card
  border-radius: 0.5rem
  padding: 20px
</style>
