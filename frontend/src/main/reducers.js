import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { reducer as toastrReducer } from "react-redux-toastr";

import dashboardReducer from "../components/dashboard/dashboardReducer";
import tabReducer from "../components/tab/tabReducer";
import billingCycleReducer from "../components/billingCycle/billingCycleReducer";

const root = combineReducers({
  dashboard: dashboardReducer,
  tab: tabReducer,
  billingCycle: billingCycleReducer,
  form: formReducer,
  toastr: toastrReducer
});

export default root;
