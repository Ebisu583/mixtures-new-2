import { createStore } from 'vuex'

export default createStore({
  state: {
    colors: [
      { red: 10, green: 20, blue: 30 },
      { red: 20, green: 120, blue: 90 }
    ],
    mixtures: [
      {
        variant: 'red',
        amount: 20
      },
      {
        variant: 'green',
        amount: 70
      },
      {
        variant: 'blue',
        amount: 40
      }]
  },
  mutations: {
    ADD_COLOR (state, color) {
      state.colors.push(color)
    },
    REMOVE_COLOR (state, index) {
      state.colors.splice(index, 1)
    },
    INCREMENT_COLOR (state, index) {
      const mixture = state.mixtures[index]
      if (mixture.amount === 100) return false
      mixture.amount++
    },
    DECREMENT_COLOR (state, index) {
      const mixture = state.mixtures[index]
      if (mixture.amount === 0) return false
      mixture.amount--
    }
  },
  actions: {
    addColor ({ commit }, colors) {
      if (colors.length === 3) {
        const [red, green, blue] = colors.map(item => Math.floor(item.amount * 2.5))
        commit('ADD_COLOR', { red, green, blue })
      }
    }
  },
  getters: {
    RGBColors (state) {
      return state.colors.map(color => `rgb(${color.red}, ${color.green}, ${color.blue})`)
    },
    amountColor (state) {
      return state.colors.length
    },
    mixtureEffectFill (state) {
      const [redCol, greenCol, blueCol] = state.mixtures.map(item => Math.floor(item.amount * 2.5))
      return `rgb(${redCol}, ${greenCol}, ${blueCol})`
    }
  }
})
