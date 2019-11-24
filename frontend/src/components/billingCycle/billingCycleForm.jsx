import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { reduxForm, Field } from "redux-form";

import { init } from "./billingCycleActions";
import inputWithLabel from "../common/form/inputWithLabel";

class BillingCycleForm extends Component {
  getField(name, label, cols, placeholder) {
    const me = this,
      { readOnly } = me.props;

    return (
      <Field
        name={name}
        component={inputWithLabel}
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
      { handleSubmit } = me.props;

    return (
      <form action="" onSubmit={handleSubmit}>
        <div className="box-body">
          {me.getField("name", "Nome", "12 4", "Informe o nome")}
          {me.getField("month", "Mês", "12 4", "Informe o mês")}
          {me.getField("year", "Ano", "12 4", "Informe o ano")}
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

const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(BillingCycleForm);
