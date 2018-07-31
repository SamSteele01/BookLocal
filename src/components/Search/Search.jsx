import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css?raw'
import SearchForm from './SearchForm'
import style from './Search.css'


// TODO: Figure out autocomplete / suggest functionality?

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
        searchString: '',
        startDate: moment([2018, 4, 17]),
        endDate: moment([2018, 4, 7]),
        results: []
    }
  this.handleSubmit=this.handleSubmit.bind(this);
  this.handleTextChange=this.handleTextChange.bind(this);
  this.handleDateChange=this.handleDateChange.bind(this);
  }
  handleTextChange = (event) => {
    if(this.state[event.target.id] ==! undefined) {
      this.setState({[event.target.id]: event.target.value});
    }
  }
  handleDateChange(date, ref) {
    // check if the changed date is in the start or end field
    console.log("Ref value is " + ref);
    if(ref === 'start') {
      this.setState({ startDate: date });
    }
    else {
      this.setState({ endDate: date});
    }
  }
  dateConverter = (mmddyyyy) => {
    return Math.floor(moment(mmddyyyy).unix() / 86400);
  }
  handleSubmit = (event) => {
    event.preventDefault();
    let start = '';
    let end = '';
    let query = [];
    console.log("Search fired!");
    // convert time strings for use by DB
    start = this.dateConverter(this.state.startDate);
    end = this.dateConverter(this.state.endDate);
    query = [this.state.searchString, start, end];
    // bringing in this.state.searchString, start, and end
    this.returnSearchResults(query);
  }
  returnSearchResults = (query) => {
    // API fetch would go here with data from event
    // returnObj = fetch('api/endpoint) 
    // method: POST,
    // body: sendObj
    // Receive JSON or other object and set state
    const queryResult = ['Memphis']; // in practice will receive JSON response
    this.setState({ results: queryResult});
    // map data to state or props?
// TODO: Import TextInputBEM into this repo
  }
  render() {
    return(
      <div className="card" styleName="style.container">
          <div className="formGroup">
            <SearchForm />
          </div>
          <div classNAme="formGroup" styleName="startDate">          
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleDateChange}
              ref="start"
              placeholderText="Check-in date"
              className="startDate-datePicker"
            />
          </div>
          <div classNAme="formGroup" styleName="endDate">
            <DatePicker
              selected={this.state.endDate}
              onChange={this.handleDateChange}
              ref="end"
              placeholderText="Check-out Date"
              classname="endDate-datePicker"
            />
          </div>
      </div>
    )
  }
}

export default Search