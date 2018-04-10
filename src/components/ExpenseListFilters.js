import React from 'react';
import {connect} from 'react-redux';
// import 'react-dates/initialize';
import {DateRangePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../actions/filters';

class ExpenseListFilters extends React.Component {
  state = {
    calFocused: null,
    // startDateId: 'start',
    // endDateId: 'end'
  };
  onDatesChange = ({startDate, endDate}) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };
  onFocusChange = (calFocused) => {
    this.setState(() => ({calFocused}));
  }
  render() {
    return (
      <div className="content-container">
        <div className="input-group">
          <div className="input-group__item">
            <input
              className="text-input"
              type="text"
              value={this.props.filters.text}
              placeholder="Search Expenses"
              onChange={(e) => {
                this.props.dispatch(setTextFilter(e.target.value));
              }}/>
          </div>
          <div  className="input-group__item">
            <select
              className="text-input"
              value={this.props.filters.sortBy}
              onChange={(e) => {
                if (e.target.value === 'date') {
                  this.props.dispatch(sortByDate());
                } else if (e.target.value === 'amount') {
                  this.props.dispatch(sortByAmount());
                }

              }}>
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </select>
          </div>
          <div className="input-group__item">
            <DateRangePicker
              startDate={this.props.filters.startDate}
              startDateId="start"
              endDate={this.props.filters.endDate}
              endDateId="end"
              onDatesChange={this.onDatesChange}
              focusedInput={this.state.calFocused}
              onFocusChange={this.onFocusChange}
              showClearDates={true}
              numberOfMonths={1}
              isOutsideRange={() => false
            }/>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {filters: state.filters};
};
export default connect(mapStateToProps)(ExpenseListFilters);
