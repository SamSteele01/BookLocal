import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { render } from 'react-dom' 
import Downshift from 'downshift'
import XIcon from 'components/XIcon'
import ArrowIcon from 'components/ArrowIcon'
// import test utilities from https://codesandbox.io/s/github/kentcdodds/downshift-examples
import getStringItems from './utils'
import './SearchForm.css'

const items = [
  {value: 'Memphis'},
  {value: 'New York'},
  {value: 'Los Angeles'},
  {value: 'Chicago'},
  {value: 'Philadelphia'},
  {value: 'Atlanta'}
]

  // Using downshift to handle the autocomplete/suggest function here. Docs and relevant comparison code
  // Here: https://www.npmjs.com/package/downshift
  // And here: https://codesandbox.io/s/github/kentcdodds/downshift-examples
  class SearchForm extends Component {
    constructor(props) {
    super(props)
    this.state = {
      query: ''
      
    }
    this.handleStateChange=this.handleStateChange.bind(this);
  }
  handleStateChange = (changes, downshiftState) => {
      if(changes.hasOwnProperty('selectedItem')) {
        this.setState({query: changes.SelectedItem})
      } else if (changes.hasOwnProperty('inputValue')) {
        this.setState({query: changes.inputValue})
      }
      }
      
      render() {
    return (
      <div>
      <Downshift
        onStateChange={this.handleStateChange}
        itemToString={item => (item ? item.value : '')}
      >
        {({
          getLabelProps,
          getInputProps,
          getToggleButtonProps,
          getMenuProps,
          getItemProps,
          isOpen,
          toggleMenu,
          clearSelection,
          selectedItem,
          inputValue,
          highlightedIndex,
        }) => (
          <div>
            <label {...getLabelProps()}>Search for a city</label>
            <div>
              <input {...getInputProps({
                isOpen,
                placeholder: "Search for a city"})} 
              />
              {selectedItem ? (
                <button 
                  onClick={clearSelection}
                  aria-label="clear selection"
                >
                  <XIcon />
                </button>

              ) : (
                <button {...getToggleButtonProps()}>
                  <ArrowIcon isOpen={isOpen} />
                </button>
              )}
            </div>
            <div>
              <ul {...getMenuProps({isOpen})} className="suggestionsDropdown">
                {isOpen
                  ? items
                    .filter(item => !inputValue || item.value.includes(inputValue))
                    .map((item, index) => (
                    <li
                    {...getItemProps({
                      key: item.value,
                      item,
                      index,
                      style: {
                        backgroundColor: 
                          highlightedIndex === index ? 'lightgray' : null,
                          fontWeight: selectedItem === item ?  700 : 400,
                      },
                      })}
                    >
                      {item.value}
                    </li>
                
                ))
                : null}
              </ul>
            </div>
          </div>

        )}

      </Downshift>
    </div>
    )

  }
}

export default SearchForm