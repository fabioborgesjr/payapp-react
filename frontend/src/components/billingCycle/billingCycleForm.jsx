import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { reduxForm, Field, formValueSelector } from "redux-form";

import { init } from "./billingCycleActions";
import InputWithLabel from "../common/form/inputWithLabel";
import ItemList from "./itemList";
import Summary from "./summary";
import BasicInfo from "./basicInfo";

class BillingCycleForm extends Component {
  getField(name, label, cols, placeholder, readOnly) {
    return (
      <Field
        name={name}
        component={InputWithLabel}
        label={label}
        cols={cols}
        placeholder={placeholder}
        readOnly={readOnly}
      />
    );
  }

  calculateSummary() {
    const sum = (t, v) => t + v,
      credits = this.props.credits.map(c => +c.value || 0),
      debts = this.props.debts.map(c => +c.value || 0);

    return {
      sumOfCredits:
        credits.length && credits[0] !== 0 && credits[0] !== {}
          ? credits.reduce(sum)
          : 0,
      sumOfDebts:
        debts.length && debts[0] !== 0 && debts[0] !== {}
          ? debts.reduce(sum)
          : 0
    };
  }

  componentWillMount() {
    const me = this,
      props = me.props;

    if (props.resetValues) props.init();
  }

  render() {
    const me = this,
      { handleSubmit, readOnly, credits, debts } = me.props,
      { sumOfCredits, sumOfDebts } = me.calculateSummary();

    return (
      <form action="" onSubmit={handleSubmit}>
        <div className="box-body">
          <BasicInfo getField={me.getField} readOnly={readOnly} />
          <ItemList
            cols="12 6"
            list={credits}
            readOnly={readOnly}
            field="credits"
            legend={"Créditos"}
          />
          <ItemList
            cols="12 6"
            list={debts}
            readOnly={readOnly}
            field="debts"
            legend={"Débitos"}
            showStatus
          />
          <Summary credit={sumOfCredits} debt={sumOfDebts} />
        </div>
        <div className="box-footer">
          <button type="submit" className={`btn btn-${this.props.submitClass}`}>
            {this.props.submitLabel}
          </button>
          <button
            type="button"
            className="btn btn-default"
            onClick={this.props.init}
          >
            Cancelar
          </button>
        </div>
      </form>
    );
  }
}

BillingCycleForm = reduxForm({
  form: "billingCycleForm",
  destroyOnUnmount: false
})(BillingCycleForm);

const selector = formValueSelector("billingCycleForm");

const mapStateToProps = state => ({
  credits: selector(state, "credits"),
  debts: selector(state, "debts")
});

const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm);
