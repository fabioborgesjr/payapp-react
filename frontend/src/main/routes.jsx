import React from "react";
import { Switch, Route, Redirect } from "react-router";

import Dashboard from "../components/dashboard/dashboard";
import BillingCycle from "../components/billingCycle/billingCycle";

export default props => (
  <div className="content-wrapper">
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/billingCycles" component={BillingCycle} />
      <Redirect from="*" to="/" />
    </Switch>
  </div>
);
