<template>
  <div class="container">
    <div class="catalog">
      <AppCatalogCard :title="cluster.title" :description="cluster.description" :link="cluster.link" :image="cluster.image"
                      v-for="cluster in clusters" :key="cluster.id"/>
    </div>
  </div>
</template>

<script lang="ts">
import AppCatalogCard from '@/components/ui/AppCatalogCard'

export default {
  components: { AppCatalogCard },
  data () {
    return {}
  },
  computed: {
    clusters () {
      return this.$store.getters['clusters/getClusters']
    }
  }
}
</script>

<style lang="sass" scoped>
.catalog
  display: grid
  grid-template-columns: 1fr 1fr
  gap: 20px
</style>
