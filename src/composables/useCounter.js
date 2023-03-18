import { computed } from 'vue'
import { useStore } from 'vuex'

export function useCounter() {
  const store = useStore()

  const count = computed(() => store.state.counter.value)

  const increment = () => {
    store.commit('counter/increment')
  }

  const decrement = () => {
    store.commit('counter/decrement')
  }

  const reset = () => {
    store.commit('counter/reset')
  }

  const setValue = (value) => {
    store.commit('counter/setValue', value)
  }

  return {
    count,
    increment,
    decrement,
    reset,
    setValue
  }
}