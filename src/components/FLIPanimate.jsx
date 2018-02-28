import React, { Component } from 'react'

export default class FLIPanimate extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}
