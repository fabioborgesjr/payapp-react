import React, { Component } from 'react'

export class tabHeader extends Component {
    render() {
        return (
            <div>
                <li>
                    <a href="javascript:;" data-toggle="tab" 
                    data-target={this.props.target}>
                        <i className={`fa fa-${this.props.icon}`}></i> {this.props.label}
                    </a>
                </li>
            </div>
        )
    }
}

export default tabHeader
