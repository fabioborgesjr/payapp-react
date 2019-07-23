import React, { Component } from 'react'
import Content from '../content/content'
import ContentHeader from '../content/contentHeader'

class Dashboard extends Component {
    render() {
        return (
            <div>
                <ContentHeader title="Dashboard" small="V1.0"/>
                <Content>
                    Dashboard
                </Content>
            </div>
        )
    }
}

export default Dashboard