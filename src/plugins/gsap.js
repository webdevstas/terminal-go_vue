import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'

export default {
  install: (app) => {
    gsap.registerPlugin(ScrollTrigger, TextPlugin)
    app.mixin({
      created () {
        this.gsap = gsap
        this.ScrollTrigger = ScrollTrigger
        this.TextPlugin = TextPlugin
      },
      mounted () {
        gsap.from('.fade-in', {
          scrollTrigger: {
            trigger: '.fade-in',
            scrub: true,
            // markers: true,
            id: 'fade in',
            start: '100 bottom',
            end: '+=150'
          },
          opacity: 0
        })

        gsap.to('.fade-out', {
          scrollTrigger: {
            trigger: '.fade-out',
            scrub: 1,
            // markers: true,
            id: 'fade out',
            start: '80% top',
            end: '+=150'
          },
          opacity: 0
        })

        ScrollTrigger.create({
          trigger: '.cover-up.first',
          start: 'top top',
          // end: 'center center',
          pin: true,
          pinSpacing: false
          // markers: true
        })

        ScrollTrigger.create({
          trigger: '.cover-up.second',
          start: 'top top',
          end: 'center center',
          pin: true,
          pinSpacing: false
          // markers: true
        })

        gsap.utils.toArray('.scale-in').forEach(item => {
          gsap.from(item, {
            scale: 1.12,
            y: 100,
            scrollTrigger: {
              trigger: item,
              markers: true,
              scrub: true,
              start: '120 bottom',
              end: '+=270'
            }
          })
        })

        const items = gsap.utils.toArray('.gradient-text')
        // Устанавливаем градиент для членов класса
        items.forEach(item => {
          gsap.set(item, {
            '--grad-from': item.dataset.gradFrom,
            '--grad-to': item.dataset.gradTo
          })
          // Если есть класс animated, то анимируем переливы градиента
          if (item.classList.contains('animated')) {
            gsap.to(item, {
              '--grad-from': item.dataset.gradTo,
              '--grad-to': item.dataset.gradFrom,
              yoyo: true,
              repeat: -1,
              duration: 1
            })
          }
        })
      }
    })
  }
}
