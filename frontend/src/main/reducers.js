import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { reducer as toastrReducer } from "react-redux-toastr";

import dashboardReducer from "../components/dashboard/dashboardReducer";
import tabReducer from "../components/common/tab/tabReducer";
import billingCycleReducer from "../components/billingCycle/billingCycleReducer";
import AuthReducer from "../components/auth/authReducer";

const root = combineReducers({
  dashboard: dashboardReducer,
  tab: tabReducer,
  billingCycle: billingCycleReducer,
  form: formReducer,
  toastr: toastrReducer,
  auth: AuthReducer
});

export default root;
