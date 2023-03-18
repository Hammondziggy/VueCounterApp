import { createStore } from 'vuex'
import Counter from './Counter.js'

const store = createStore({
  modules: {
    counter: Counter
  }
})

export default store