export default {
  namespaced: true,
  state () {
    return {
      terminals: [
        {
          id: 1,
          address: 'Несебрская 6',
          coords: [43.581396, 39.719130],
          statistic: {
            dayViews: 389,
            monthViews: 7321
          }
        },
        {
          id: 2,
          address: 'Курортный проспект 5а',
          coords: [43.584555, 39.719099],
          statistic: {
            dayViews: 257,
            monthViews: 5341
          }
        },
        {
          id: 3,
          address: 'Навагинская 16/1',
          coords: [43.584118, 39.720996],
          statistic: {
            dayViews: 757,
            monthViews: 8645
          }
        },
        {
          id: 4,
          address: 'Площадь у администрации',
          coords: [43.58479, 39.721585],
          statistic: {
            dayViews: 848,
            monthViews: 9443
          }
        }
      ]
    }
  },
  getters: {
    getTerminals (state) {
      return state.terminals
    }
  }
}
