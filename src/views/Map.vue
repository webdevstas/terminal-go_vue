<template>
  <div class="container">
    <AppMap title="Карта расположения терминалов" :terminals="terminals" />
  </div>
</template>

<script lang="ts">
import AppMap from '@/components/ui/AppMap'
export default {
  components: { AppMap },
  computed: {
    terminals () {
      return this.$store.getters['terminals/getTerminals']
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
