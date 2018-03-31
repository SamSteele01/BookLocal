import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class HeadingDropDown extends Component {
    constructor(props){
        super(props)
        this.state = {
          dropDownOpen: false,
        }
        this.toggleDropDownState=this.toggleDropDownState.bind(this);
      }

    static propTypes = {
        headingName: PropTypes.string,
        subHeadingName: PropTypes.string,
        className: PropTypes.string
    }

    toggleDropDownState = () => {
        this.setState({
            dropDownOpen: !this.state.dropDownOpen
        })
    }

    render() {
        return (
            <div className={`heading-drop-down-container ${this.props.className}`}>
                <div className="heading-typography heading-clickable" onClick={this.toggleDropDownState}>
                    {this.props.headingName &&
                        <h2>{this.props.headingName}</h2>
                    }
                    {this.props.subHeadingName &&
                        <h3>{this.props.subHeadingName}</h3>
                    }
                </div>
                {this.state.dropDownOpen &&
                    <div>
                        {this.props.children}
                    </div>
                }
            </div>
        )
    }
}


