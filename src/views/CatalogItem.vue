<template>
  <div class="container">
    <AppMap
      :terminals="terminals"
      :title="cluster.title"
    />
  </div>
</template>

<script lang="ts">
import AppMap from '@/components/ui/AppMap.vue'
import {defineComponent} from "vue"

export default defineComponent({
  components: {AppMap},
  props: ['title'],
  data() {
    return {}
  },
  computed: {
    cluster() {
      return this.$store.getters['clusters/getClusterBySlug'](this.$route.params.slug)
    },
    terminals() {
      return this.$store.getters['terminals/getTerminalsByClusterId'](this.cluster.id)
    }
  }
})
</script>

<style lang="sass" scoped>

</style>
