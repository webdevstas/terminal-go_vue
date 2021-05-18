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
import {Cluster} from '@/types/clusters'
import {Terminal} from '@/types/terminals'

export default defineComponent({
  components: {AppMap},
  props: {
    title: {type: String, default: ''}
  },
  data() {
    return {}
  },
  computed: {
    cluster(): Cluster {
      return this.$store.getters['clusters/getClusterBySlug'](this.$route.params.slug)
    },
    terminals(): Terminal[] {
      return this.$store.getters['terminals/getTerminalsByClusterId'](this.cluster.id)
    }
  }
})
</script>

<style lang="sass" scoped>

</style>
