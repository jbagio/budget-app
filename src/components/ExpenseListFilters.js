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

export class ExpenseListFilters extends Component {
  state = {
    focusedDatePicker: null,
  };

  handleTextChange = e => {
    this.props.onSetTextFilter(e.target.value);
  };

  handleSortByChange = e => {
    if (e.target.value === 'date') {
      this.props.onSortByDate();
    } else if (e.target.value === 'amount') {
      this.props.onSortByAmount();
    }
  };

  handleDatesChange = ({ startDate, endDate }) => {
    this.props.onSetStartDate(startDate);
    this.props.onSetEndDate(endDate);
  };

  handleFocusChange = focused => {
    this.setState(() => ({ focusedDatePicker: focused }));
  };

  render() {
    return (
      <div>
        <input
          type="text"
          defaultValue={this.props.filters.text}
          onChange={this.handleTextChange}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={this.handleSortByChange}
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
          focusedInput={this.state.focusedDatePicker}
          onFocusChange={this.handleFocusChange}
          numberOfMonths={1}
          showClearDates={true}
          isOutsideRange={() => false}
          displayFormat={'DD/MM/YYYY'}
        />
      </div>
    );
  }
}

ExpenseListFilters.propTypes = {
  filters: PropTypes.object,
  onSetTextFilter: PropTypes.func,
  onSortByDate: PropTypes.func,
  onSortByAmount: PropTypes.func,
  onSetStartDate: PropTypes.func,
  onSetEndDate: PropTypes.func,
};

const mapStateToProps = state => ({
  filters: state.filters,
});

const mapDispatchToProps = dispatch => ({
  onSetTextFilter: text => dispatch(setTextFilter(text)),
  onSortByDate: () => dispatch(sortByDate()),
  onSortByAmount: () => dispatch(sortByAmount()),
  onSetStartDate: date => dispatch(setStartDate(date)),
  onSetEndDate: date => dispatch(setEndDate(date)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseListFilters);
