import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { render } from 'react-dom'
import Downshift from 'downshift'
import XIcon from 'components/XIcon'
import ArrowIcon from 'components/ArrowIcon'
import './SearchForm.css'

const allItems = [
  {name: 'Memphis', id: 'memphis'},
  {name: 'New York', id: 'new york'},
  {name: 'Los Angeles', id: 'los angeles'},
  {name: 'Chicago', id: 'chicago'},
  {name: 'Philadelphia', id: 'philadelphia'},
  {name: 'Atlanta', id: 'atlanta'}
]
const items = allItems.map(item => ({name: item.name, id: item.id.toLowerCase()}))

const itemToString = i => (i ? i.name : '')

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
  
  handleStateChange = (changes) => {
      if(changes.hasOwnProperty('selectedItem')) {
        this.setState({ query: changes.selectedItem} );
        this.props.setSearchString(changes.selectedItem);
      } else if (changes.hasOwnProperty('inputValue')) {
        this.setState({ query: changes.inputValue });
        this.props.setSearchString(changes.inputValue);
      }
  }

  render() {
    return (
      <div styleName="search-form">
      <Downshift
        onStateChange={this.handleStateChange}
        itemToString={itemToString}
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
          highlightedIndex
        }) => (
          <div>
            <label {...getLabelProps()}>Search for a city</label>
            <div>
              <input {...getInputProps({
                isOpen,
                placeholder: "Search for a city"})}
                className="citySearch-input formInput"
                htmlId="citySearch"
              />
              { selectedItem ? (
                <button
                  onClick={clearSelection}
                  aria-label="clear selection"
                >
                  <XIcon />
                </button>
              ) : (
                <button className="citySearch-button" {...getToggleButtonProps()}>
                  <ArrowIcon isOpen={isOpen} />
                </button>
              )}
            </div>
            <div>
              <ul {...getMenuProps({
                    isOpen,
                    style: {
                      border:
                        isOpen ? '0.1rem solid lightgray' : null,
                      borderRadius:
                        isOpen ? '0.1rem' : null
                    }
                  })}
                  className="suggestionsDropdown"
              >
                { isOpen &&
                  items
                    .filter(item => !inputValue || item.id.includes(inputValue))
                    .map((item, index) => (
                      <li
                      {...getItemProps({
                        key: item.id,
                        item,
                        index,
                        style: {
                          backgroundColor:
                            highlightedIndex === index ? 'lightgray' : null,
                            fontWeight: selectedItem === item ?  700 : 400,
                        },
                        })}
                      >
                        {item.name}
                      </li>
                    ))
                }
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
