import React from 'react'
import matchSorter from 'match-sorter'

// dummy data for dropdown/autocomplete for city search
const items = [
    {value: 'Memphis'},
    {value: 'New York'},
    {value: 'Los Angeles'},
    {value: 'Chicago'},
    {value: 'Philadelphia'},
    {value: 'Atlanta'}
  ]

function getItems(filter) {
    return filter
      ? matchSorter(items, filter, {
          keys: ['value'],
        })
      : items
  }
  
function getStringItems(filter) {
return getItems(filter).map(({value}) => value)
}

  const itemToString = i => (i ? i.value : '')

export default {
    getItems,
    getStringItems,
    itemToString,
}