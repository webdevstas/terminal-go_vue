<template>
  <div>
    <h1 class="section-title">
      {{ title }}
    </h1>
    <div id="map"/>
    <div
      v-if="statsVisible"
      class="stats"
    >
      <div class="stats-col">
        Адрес
      </div>
      <div class="stats-col">
        Дневная проходимость
      </div>
      <div class="stats-col">
        Месячная проходимость
      </div>
      <div class="stats-col">
        {{ stats.address }}
      </div>
      <div class="stats-col">
        {{ stats.statistic.dayViews }}
      </div>
      <div class="stats-col">
        {{ stats.statistic.monthViews }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {markRaw} from 'vue'

/* eslint-disable no-undef */
import {defineComponent} from "vue"

export default defineComponent({
  props: ['terminals', 'title'],
  data() {
    return {
      map: null,
      statsVisible: false,
      stats: null
    }
  },

  computed: {},

  created() {
    ymaps.ready(() => {
      const map = new ymaps.Map('map', {
        center: [43.581396, 39.719130],
        zoom: 15
      })
      this.map = markRaw(map)
      this.setMarkers()
    })
  },

  methods: {
    openStats(data) {
      this.stats = data
      this.statsVisible = true
    },

    closeStats() {
      this.statsVisible = false
    },

    setMarkers() {
      const collection = new ymaps.GeoObjectCollection(null, {
        iconLayout: 'default#image',
        iconImageHref: '/go_logo.png',
        iconImageSize: [20, 20],
        iconImageOffset: [0, 0]
      })

      this.terminals.forEach(terminal => {
        const placemark = new ymaps.Placemark(terminal.coords, {
          hintContent: 'Нажмите для просмотра статистики',
          balloonContentHeader: terminal.address
        }, {
          hideIconOnBalloonOpen: false
        })
        placemark.meta = terminal
        placemark.events.add(['click', 'balloonopen'], (e) => {
          this.openStats(terminal)
        })
        placemark.events.add('balloonclose', (e) => {
          this.closeStats()
        })
        collection.add(placemark)
      })

      this.map.geoObjects.add(collection)
    }
  }
})
</script>

<style lang="sass" scoped>
#map
  width: 100%
  height: 55vh
  border-radius: 0.25rem

.stats
  display: grid
  grid-template-columns: repeat(3, 1fr)
  gap: 1px
  background-color: #6a6a6a
  grid-auto-rows: minmax(30px, auto)
  position: absolute
  bottom: 0

  &-col
    background-color: #1e1e1e
    display: flex
    align-items: center
    justify-content: center
    min-width: 250px
</style>
