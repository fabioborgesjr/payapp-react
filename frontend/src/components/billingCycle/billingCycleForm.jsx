import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { reduxForm, Field, formValueSelector } from "redux-form";

import { init } from "./billingCycleActions";
import InputWithLabel from "../common/form/inputWithLabel";
import CreditList from "./creditList";

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

  componentWillMount() {
    const me = this,
      props = me.props;

    if (props.resetValues) props.init();
  }

  render() {
    const me = this,
      { handleSubmit, readOnly, credits } = me.props;

    return (
      <form action="" onSubmit={handleSubmit}>
        <div className="box-body">
          {me.getField("name", "Nome", "12 4", "Informe o nome", readOnly)}
          {me.getField("month", "Mês", "12 4", "Informe o mês", readOnly)}
          {me.getField("year", "Ano", "12 4", "Informe o ano", readOnly)}
          <CreditList cols="12 6" list={credits} readOnly={readOnly} />
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
  credits: selector(state, "credits")
});

const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm);
