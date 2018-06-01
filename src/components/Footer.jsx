import React, { Component } from 'react'
import EthereumSymbol from "images/Ethereum_logo.png";

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                {/* <footer > */}
                <div className="flex-row-center mit-symbol">
                    <i className="fas fa-balance-scale"></i> MIT License 
                </div>
                <div className="flex-row-center ethereum-symbol">
                    <img className="image-xsml" alt="Ethereum symbol" src={EthereumSymbol}/>  Powered by Ethereum
                </div>
                {/* </footer> */}
            </div>
        )
    }
}
