import * as types from './mutation-types'

export default {
    [types.SET_COLUMNS](state, columns) {
        state.columns = columns
    },

    [types.SET_CARD](state, updatedCard) {
        state.columns.forEach((column, index) => {
            let pos = column.cards.findIndex(card => card.id == updatedCard.id)

            if (pos != -1) {
                Object.assign(state.columns[index].cards[pos], { ...updatedCard })
            }
        })
    },

    [types.ADD_CARD](state, card) {
        state.columns[card.column_id].cards.push(card)
    },
}
