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
      }
    })
  }
}
