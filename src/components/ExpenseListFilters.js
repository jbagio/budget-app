import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { DateRangePicker } from 'react-dates';
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate,
} from '../redux/actions/filters';

class ExpenseListFilters extends Component {
  state = {
    isDatePickerFocused: null,
  };

  handleDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  handleFocusChange = focused => {
    this.setState(() => ({ isDatePickerFocused: focused }));
  };

  render() {
    return (
      <div>
        <input
          type="text"
          defaultValue={this.props.filters.text}
          onChange={e => this.props.dispatch(setTextFilter(e.target.value))}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={e => {
            if (e.target.value === 'date') {
              this.props.dispatch(sortByDate());
            } else if (e.target.value === 'amount') {
              this.props.dispatch(sortByAmount());
            }
          }}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          startDateId={'startDateId'}
          endDate={this.props.filters.endDate}
          endDateId={'endDateId'}
          onDatesChange={this.handleDatesChange}
          focusedInput={this.state.isDatePickerFocused}
          onFocusChange={this.handleFocusChange}
          numberOfMonths={1}
          showClearDates={true}
          isOutsideRange={() => false}
        />
      </div>
    );
  }
}

ExpenseListFilters.propTypes = {
  filters: PropTypes.object,
  dispatch: PropTypes.func,
};

const mapStateToProps = state => ({
  filters: state.filters,
});

export default connect(mapStateToProps)(ExpenseListFilters);
