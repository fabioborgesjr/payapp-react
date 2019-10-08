import { combineReducers } from "redux";
import dashboardReducer from "../components/dashboard/dashboardReducer";
import tabReducer from "../components/tab/tabReducer";
import billingCycleReducer from "../components/billingCycle/billingCycleReducer";

const root = combineReducers({
  dashboard: dashboardReducer,
  tab: tabReducer,
  billingCycle: billingCycleReducer
});

export default root;
