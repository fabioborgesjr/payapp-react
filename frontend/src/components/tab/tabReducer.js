const initialState = {
    selected: ''
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case 'TAB_SELECTED':
        return { ...state, selected: payload }

    default:
        return state
    }
}
