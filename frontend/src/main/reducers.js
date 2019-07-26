import { combineReducers } from 'redux'
import dashboardReducer from '../components/dashboard/dashboardReducer'

const root = combineReducers({
    dashboard: dashboardReducer
})

export default root