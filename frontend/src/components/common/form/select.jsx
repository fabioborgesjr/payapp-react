import React from "react";

const statusOptions = ["Pago", "Pendente", "Agendado"];

export default props => (
  <select
    // {...props.input}
    className="form-control"
    placeholder={props.placeholder}
    readOnly={props.readOnly}
    type={props.type}
  >
    {statusOptions.map(statusOption => (
      <option key={statusOption} value={statusOption.toLocaleUpperCase()}>
        {statusOption}
      </option>
    ))}
  </select>
);
