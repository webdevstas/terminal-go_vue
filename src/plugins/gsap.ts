import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {TextPlugin} from 'gsap/TextPlugin'

export default {
  install: (app) => {
    gsap.registerPlugin(ScrollTrigger, TextPlugin)
    app.mixin({
      created() {
        this.gsap = gsap
        this.ScrollTrigger = ScrollTrigger
        this.TextPlugin = TextPlugin
      },
      methods: {
        makePin(pinBock: string, trigger: string, markers = false, start = 'top top', end = 'bottom bottom') {
          this.gsap.to(pinBock, {
            scrollTrigger: {
              trigger: trigger,
              pin: pinBock,
              start: start,
              end: end,
              markers: markers
            }
          })
        }
      }
    })
  }
}
