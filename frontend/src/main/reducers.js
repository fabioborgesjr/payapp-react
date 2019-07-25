import { combineReducers } from 'redux'

const root = combineReducers({
    dashboard: () => ({
        summary: {
            credit: 100,
            debt: 50
        }
    })
})

export default root