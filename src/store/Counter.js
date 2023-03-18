export default {
  namespaced: true,
  state: {
    value: 0
  },
  mutations: {
    increment(state) {
      state.value++
    },
    decrement(state) {
      state.value--
    },
    reset(state) {
      state.value = 0
    },
    setValue(state, value) {
      state.value = value
    }
  },

  actions: {
    increment({ commit }) {
      commit('increment')
    },
    decrement({ commit }) {
      commit('decrement')
    },
    reset({ commit }) {
      commit('reset')
    },
    setValue({ commit }, value) {
      commit('setValue', value)
    }
  }
}
