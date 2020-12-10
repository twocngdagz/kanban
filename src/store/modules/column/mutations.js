import * as types from './mutation-types'

export default {
  [types.SET_COLUMNS] (state, columns) {
    state.columns = columns
  },

  [types.DELETE_COLUMN] (state, id) {
    let pos = state.columns.findIndex(column => column.id === id)
    state.columns.splice(pos, 1)
  },

  [types.ADD_COLUMN] (state, column) {
    state.columns.push(column)
  },
}
