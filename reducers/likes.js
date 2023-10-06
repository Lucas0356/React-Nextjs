export const likesInitialState = JSON.parse(window.localStorage.getItem('likes')) || []

export const CART_ACTION_TYPES = {
    ADD_LIKE: 'ADD_LIKE',
    REMOVE_LIKE: 'REMOVE_LIKE',
}

// Guardamos los cambios en el localStorage como likes
export const updateLocalStorage = state => {
    window.localStorage.setItem('likes', JSON.stringify(state))
}

const UPDATE_STATE_BY_ACTION = {
    [CART_ACTION_TYPES.ADD_LIKE]: (state, action) => {
        const { id } = action.id
        const postInlikesIndex = state.findIndex(item => item.id === id)

        if (postInlikesIndex >= 0) {
            const newState = [
                ...state.slice(0, postInlikesIndex),
                ...state[postInlikesIndex],
                ...state.slice(postInlikesIndex + 1)
            ]

            updateLocalStorage(newState)
            return newState
        }

        const newState = [
            ...state,
            {
                ...action.id,
            }
        ]

        updateLocalStorage(newState)
        return newState
    },
    [CART_ACTION_TYPES.REMOVE_LIKE]: (state, action) => {
        const { id } = action.id
        const newState = state.filter(item => item.id !== id)
        updateLocalStorage(newState)
        return newState
    },
}

export const likesReducer = (state, action) => {
    const { type: actionType } = action
    const updateState = UPDATE_STATE_BY_ACTION[actionType]
    return updateState ? updateState(state, action) : state
}