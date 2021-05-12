<template>
  <div class="card">
    <slot />
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue"

export default defineComponent({

})
</script>

<style lang="sass" scoped>
.card
  border-radius: 0.9rem
  padding: 20px
  position: relative
</style>
