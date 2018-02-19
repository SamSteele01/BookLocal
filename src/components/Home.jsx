import React, { Component } from 'react'
import RegisterMessage from './RegisterMessage';

export default class Home extends Component {
    render() {
        return (
            <div className='home'>
                {/* <h1>Home</h1> */}
                <RegisterMessage/>
            </div>
        )
    }
}
