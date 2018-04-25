import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class HeadingDropDown extends Component {
    constructor(props){
        super(props)
        this.state = {
          dropDownOpen: false,
          textShadow: "text-shadow-raised"
        }
        this.toggleDropDownState=this.toggleDropDownState.bind(this);
      }

    static propTypes = {
        headingName: PropTypes.string,
        subHeadingName: PropTypes.string,
        className: PropTypes.string,
        childClassName: PropTypes.string
    }

    toggleDropDownState = () => {
        let setTextShadow = ""
        if(this.state.dropDownOpen){
            setTextShadow = "text-shadow-raised"
        }else{
            setTextShadow = "text-shadow-lowered"
        }
        this.setState({
            dropDownOpen: !this.state.dropDownOpen,
            textShadow: setTextShadow
        })
    }

    render() {
        return (
            <div className={`heading-drop-down-container ${this.props.className}`}>
                <div className="heading-typography heading-clickable" onClick={this.toggleDropDownState}>
                    {this.props.headingName &&
                        <h2 className={`${this.state.textShadow}`}>{this.props.headingName}</h2>
                    }
                    {this.props.subHeadingName &&
                        <h3 className={`${this.state.textShadow}`}>{this.props.subHeadingName}</h3>
                    }
                </div>
                {this.state.dropDownOpen &&
                    <div className={`drop-down-contents ${this.props.childClassName}`}>
                        {this.props.children}
                    </div>
                }
            </div>
        )
    }
}

