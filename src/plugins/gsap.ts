import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {TextPlugin} from 'gsap/TextPlugin';

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $gsap: typeof gsap
    $ScrollTrigger: typeof ScrollTrigger
    $TextPlugin: typeof TextPlugin
    $makePin(pinBlock: string, trigger: string, markers?: boolean, start?: string, end?: string): void
  }
}

export default {
  install (app: any, options?: any): void {
    app.config.globalProperties.$makePin = (pinBlock: string, trigger: string, markers = false, start = 'top top', end = 'bottom bottom') => {
      gsap.to(pinBlock, {
        scrollTrigger: {
          trigger: trigger,
          pin: pinBlock,
          start: start,
          end: end,
          markers: markers
        }
      })
    }
    gsap.registerPlugin(ScrollTrigger)
    gsap.registerPlugin(TextPlugin)
    app.config.globalProperties.$gsap = gsap
    app.config.globalProperties.$ScrollTrigger = ScrollTrigger
    app.config.globalProperties.$TextPlugin = TextPlugin
  }
}


// export default {
//     install: (app) => {
//         gsap.registerPlugin(ScrollTrigger, TextPlugin);
//         app.mixin({
//             created() {
//                 this.gsap = gsap;
//                 this.ScrollTrigger = ScrollTrigger;
//                 this.TextPlugin = TextPlugin;
//             },
//             methods: {
//                 makePin(pinBock, trigger, markers = false, start = 'top top', end = 'bottom bottom') {
//                     this.gsap.to(pinBock, {
//                         scrollTrigger: {
//                             trigger: trigger,
//                             pin: pinBock,
//                             start: start,
//                             end: end,
//                             markers: markers
//                         }
//                     });
//                 }
//             }
//         });
//     }
// };
