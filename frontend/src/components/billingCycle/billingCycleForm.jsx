import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import inputWithLabel from "../common/form/inputWithLabel";

class BillingCycleForm extends Component {
  getField(name, label, cols, placeholder) {
    return (
      <Field
        name={name}
        component={inputWithLabel}
        label={label}
        cols={cols}
        placeholder={placeholder}
      />
    );
  }

  render() {
    const me = this,
      { handleSubmit } = me.props;

    return (
      <form action="" onSubmit={handleSubmit}>
        <div className="box-body">
          {me.getField("name", "Nome", "12 4", "Informe o nome")}
          {me.getField("month", "Mês", "12 4", "Informe o mês")}
          {me.getField("year", "Ano", "12 4", "Informe o ano")}
        </div>
        <div className="box-footer">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default reduxForm({ form: "billingCycleForm" })(BillingCycleForm);
