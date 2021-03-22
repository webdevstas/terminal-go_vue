<template>
  <router-link :to="`/katalog/${link}`" class="catalog-card__link">
    <div class="catalog-card" :style="{backgroundImage: `url(${image})`}">
      <h2 class="catalog-card__title">{{ title }}</h2>
      <p class="catalog-card__description">{{ description }}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ['title', 'description', 'link', 'image']
}
</script>

<style lang="sass" scoped>
.catalog-card
  background-color: rgba(0,0,0,0.6)
  background-position: center
  background-repeat: no-repeat
  background-size: cover
  background-blend-mode: darken
  border-radius: 0.25rem
  height: 100px
  padding: 10px
  color: #fff
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  &__link
    text-decoration: none
</style>
