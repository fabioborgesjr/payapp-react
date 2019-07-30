import { combineReducers } from 'redux'
import dashboardReducer from '../components/dashboard/dashboardReducer'
import tabReducer from '../components/tab/tabReducer';

const root = combineReducers({
    dashboard: dashboardReducer,
    tab: tabReducer
})

export default root