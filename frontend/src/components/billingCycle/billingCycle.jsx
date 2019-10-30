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
import { selectTab, showTabs } from "../common/tab/tabActions";
import { create, update } from "../billingCycle/billingCycleActions";

import List from "./billingCycleList";
import Form from "./billingCycleForm";

class BillingCycle extends Component {
  componentWillMount() {
    var me = this,
      props = me.props;

    props.selectTab("tabList");
    props.showTabs("tabList", "tabCreate");
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
                <Form onSubmit={props.create} resetValues />
              </TabContent>
              <TabContent id="tabUpdate">
                <Form onSubmit={props.update} />
              </TabContent>
              <TabContent id="tabDelete">
                <h1>Excluir</h1>
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
      selectTab,
      showTabs,
      create,
      update
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(BillingCycle);
