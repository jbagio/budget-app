import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
} from '../redux/modules/filters';

const ExpenseListFilters = ({ filters, dispatch }) => (
  <div>
    <input
      type="text"
      defaultValue={filters.text}
      onChange={e => dispatch(setTextFilter(e.target.value))}
    />
    <select
      value={filters.sortBy}
      onChange={e => {
        if (e.target.value === 'date') {
          dispatch(sortByDate());
        } else if (e.target.value === 'amount') {
          dispatch(sortByAmount());
        }
      }}
    >
      <option value="date">Date</option>
      <option value="amount">Amount</option>
    </select>
  </div>
);

ExpenseListFilters.propTypes = {
  filters: PropTypes.object,
  dispatch: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    filters: state.filters,
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);
