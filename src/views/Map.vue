<template>
  <div class="container">
    <div id="map"></div>
    <div class="stats" v-if="statsVisible">
      {{ stats }}
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
        iconImageHref: '/terminal-icon.png',
        iconImageSize: [18, 50],
        iconImageOffset: [-8, 0]
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
    },
    deleteMarks () {
      this.map.geoObjects.removeAll()
    }
  }
}
</script>

<style lang="sass" scoped>
#map
  width: 100%
  height: 60vh
</style>
