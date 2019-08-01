import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ContentHeader from '../content/contentHeader'
import Content from '../content/content'
import Tabs from '../tab/tabs';
import TabsContent from '../tab/tabsContent';
import TabsHeader from '../tab/tabsHeader';
import TabHeader from '../tab/tabHeader';
import TabContent from '../tab/tabContent';
import { selectTab } from '../tab/tabActions';

class BillingCycle extends Component {

    componentWillMount() {
        this.props.selectTab('tabList')
    }

    render() {
        return (
            <div>
                <ContentHeader title="Ciclos de Pagamentos" small="Cadastro" />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label="Listar" icon="bars" target="tabList"></TabHeader>
                            <TabHeader label="Incluir" icon="plus" target="tabCreate"></TabHeader>
                            <TabHeader label="Alterar" icon="pencil" target="tabUpdate"></TabHeader>
                            <TabHeader label="Excluir" icon="trash-o" target="tabDelete"></TabHeader>
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id="tabList">
                                <h1>Lista</h1>
                            </TabContent>
                            <TabContent id="tabCreate">
                                <h1>Incluir</h1>
                            </TabContent>
                            <TabContent id="tabUpdate">
                                <h1>Alterar</h1>
                            </TabContent>
                            <TabContent id="tabDelete">
                                <h1>Excluir</h1>
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    selectTab
}, dispatch)

export default connect(null, mapDispatchToProps)(BillingCycle)