import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'

declare module '@vue/runtime-core' {
  // Declare your own store states.
  interface State {
    number: number,
    interval: number,
    moving: boolean
  }

  interface ComponentCustomProperties {
    $store: Store<State>
  }
}