import * as types from './mutation-types'

export const fetchColumns = ({ commit }) => {
    return new Promise((resolve, reject) => {
        window.axios.get(`${process.env.VUE_APP_API_URL}/api/columns`).then((response) => {
            commit(types.SET_COLUMNS, response.data)
            resolve(response)
        }).catch((err) => {
            reject(err)
        })
    })
}

export const updateColumns = ({ commit, getters }) => {
    return new Promise((resolve, reject) => {
        window.axios.put(`${process.env.VUE_APP_API_URL}/api/columns`, getters.columns).then((response) => {
            commit(types.SET_COLUMNS, response.data)
            resolve(response)
        }).catch((err) => {
            reject(err)
        })
    })
}

export const updateCard = ({ commit }, data) => {
    return new Promise((resolve, reject) => {
        window.axios.put(`${process.env.VUE_APP_API_URL}/api/card`, data).then((response) => {
            commit(types.SET_CARD, response.data)
            resolve(response)
        }).catch((err) => {
            reject(err)
        })
    })
}

export const addCard = ({ commit }, data) => {
    return new Promise((resolve, reject) => {
        window.axios.post(`${process.env.VUE_APP_API_URL}/api/card`, data).then((response) => {
            response.data.index = data.index
            commit(types.ADD_CARD, response.data)
            resolve(response)
        }).catch((err) => {
            reject(err)
        })
    })
}

export const dropColumn = ({ commit }, data) => {
    return new Promise((resolve, reject) => {
        window.axios.delete(`${process.env.VUE_APP_API_URL}/api/column/${data.id}`).then((response) => {
            commit(types.DELETE_COLUMN, data.id)
            resolve(response)
        }).catch((err) => {
            reject(err)
        })
    })
}

export const createColumn = ({ commit }, data) => {
    return new Promise((resolve, reject) => {
        window.axios.post(`${process.env.VUE_APP_API_URL}/api/columns`, data).then((response) => {
            commit(types.ADD_COLUMN, response.data)
            resolve(response)
        }).catch((err) => {
            reject(err)
        })
    })
}

export const exportDB = () => {
    return new Promise((resolve, reject) => {
        window.axios.get(`${process.env.VUE_APP_API_URL}/api/export`, {responseType:'blob'}).then((response) => {
            resolve(response)
        }).catch((err) => {
            reject(err)
        })
    })
}
