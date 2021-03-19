<template>
  <div class="container">
    <h1 class="section-title">Карта расположения терминалов</h1>
    <div id="map"></div>
    <div class="stats" v-if="statsVisible">
      <div class="stats-col">Адрес</div>
      <div class="stats-col">Дневная проходимость</div>
      <div class="stats-col">Месячная проходимость</div>
      <div class="stats-col">{{ stats.address }}</div>
      <div class="stats-col">{{ stats.statistic.dayViews }}</div>
      <div class="stats-col">{{ stats.statistic.monthViews }}</div>
    </div>
  </div>
</template>

<script>
import { markRaw } from 'vue'
/* eslint-disable no-undef */
export default {
  data () {
    return {
      map: null,
      statsVisible: false,
      stats: null
    }
  },

  computed: {
    terminals () {
      return this.$store.getters['terminals/getTerminals']
    }
  },

  created () {
    // Установить скрипты для использования яндекс карты
    const scriptYandexMap = document.createElement('script')
    scriptYandexMap.setAttribute(
      'src',
      'https://api-maps.yandex.ru/2.1/?apikey=31cbb2bd-97fb-43fb-904b-254c2dc5f2bc&lang=ru_RU'
    )
    document.head.appendChild(scriptYandexMap)

    // Инициализировать яндекс карту
    scriptYandexMap.addEventListener('load', this.initializeYandexMap)
  },

  methods: {
    openStats (data) {
      this.stats = data
      this.statsVisible = true
    },

    closeStats () {
      this.statsVisible = false
    },

    initializeYandexMap () {
      ymaps.ready(() => {
        const map = new ymaps.Map('map', {
          center: [43.581396, 39.719130],
          zoom: 15
        })
        this.map = markRaw(map)
        this.setMarkers()
      })
    },

    setMarkers () {
      const collection = new ymaps.GeoObjectCollection(null, {
        iconLayout: 'default#image',
        iconImageHref: '/go_logo.png',
        iconImageSize: [30, 30],
        iconImageOffset: [-13, 0]
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
}
</script>

<style lang="sass" scoped>
#map
  width: 100%
  height: 60vh

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
