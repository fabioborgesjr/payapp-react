import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import ContentHeader from "../content/contentHeader";
import Content from "../content/content";
import Tabs from "../common/tab/tabs";
import TabsContent from "../common/tab/tabsContent";
import TabsHeader from "../common/tab/tabsHeader";
import TabHeader from "../common/tab/tabHeader";
import TabContent from "../common/tab/tabContent";
import {
  init,
  create,
  update,
  remove
} from "../billingCycle/billingCycleActions";

import List from "./billingCycleList";
import Form from "./billingCycleForm";

class BillingCycle extends Component {
  componentWillMount() {
    this.props.init();
  }

  render() {
    var me = this,
      props = me.props;

    return (
      <div>
        <ContentHeader title="Ciclos de Pagamentos" small="Cadastro" />
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader
                label="Listar"
                icon="bars"
                target="tabList"
              ></TabHeader>
              <TabHeader
                label="Incluir"
                icon="plus"
                target="tabCreate"
              ></TabHeader>
              <TabHeader
                label="Alterar"
                icon="pencil"
                target="tabUpdate"
              ></TabHeader>
              <TabHeader
                label="Excluir"
                icon="trash-o"
                target="tabDelete"
              ></TabHeader>
            </TabsHeader>
            <TabsContent>
              <TabContent id="tabList">
                <List />
              </TabContent>
              <TabContent id="tabCreate">
                <Form
                  onSubmit={props.create}
                  submitClass="primary"
                  submitLabel="Incluir"
                  resetValues
                />
              </TabContent>
              <TabContent id="tabUpdate">
                <Form
                  onSubmit={props.update}
                  submitClass="info"
                  submitLabel="Alterar"
                />
              </TabContent>
              <TabContent id="tabDelete">
                <Form
                  onSubmit={props.remove}
                  readOnly
                  submitClass="danger"
                  submitLabel="Excluir"
                />
              </TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      init,
      create,
      update,
      remove
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(BillingCycle);
