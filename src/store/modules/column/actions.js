import * as types from './mutation-types'

export const fetchColumns = ({ commit }) => {
  return new Promise((resolve, reject) => {
    window.axios.get(`http://kanban-backend.test/api/columns`).then((response) => {
      commit(types.SET_COLUMNS, response.data)
      resolve(response)
    }).catch((err) => {
      reject(err)
    })
  })
}
