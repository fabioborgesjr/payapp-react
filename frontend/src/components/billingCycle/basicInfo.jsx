import React from "react";

import Grid from "../common/layout/grid";
import Row from "../common/layout/row";

export default ({ getField, readOnly }) => {
  return (
    <Grid cols="12">
      <legend>{"Informações básicas"}</legend>
      <div style={{ margin: "0 9px" }}>
        <fieldset>
          {getField("name", "Nome", "12 4", "Informe o nome", readOnly)}
          {getField("month", "Mês", "12 4", "Informe o mês", readOnly)}
          {getField("year", "Ano", "12 4", "Informe o ano", readOnly)}
        </fieldset>
      </div>
    </Grid>
  );
};
