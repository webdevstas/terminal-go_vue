<template>
  <ul :class="`${name}-list`">
    <li
      v-for="(item, i) in items"
      :key="i"
      class="list-item"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script lang="ts">
export default {
  props: ['items', 'name', 'animOptions'],

  mounted () {
    this.startTextAnim(this.animOptions)
  },

  methods: {
    startTextAnim (options) {
      const textItems = this.gsap.utils.toArray(`.${this.name}-list .list-item`)
      textItems.forEach(item => {
        this.gsap.from(item, {
          scale: 0,
          opacity: 0,
          scrollTrigger: {
            trigger: item,
            scrub: 0.5,
            // markers: true,
            start: 'top top',
            end: '100 200'
          }
        })
      })
    }
  }
}
</script>

<style lang="sass">
.list
  list-style: circle

  &-item
    font-size: 32px
    height: 100px
    margin-left: 120px
    display: flex
    align-items: center
    justify-content: flex-start
    text-align: start
    transform-origin: right
    font-family: Jura-reg
</style>
