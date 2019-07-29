import React, { Component } from 'react'
import ContentHeader from '../content/contentHeader'
import Content from '../content/content'
import Tabs from '../tab/tabs';
import TabsContent from '../tab/tabsContent';
import TabsHeader from '../tab/tabsHeader';
import TabHeader from '../tab/tabHeader';

export default class billingCycle extends Component {
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

                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}