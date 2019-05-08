import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const ExpenseList = ({ expenses, filters }) => {
  return (
    <div>
      <p>{expenses.length}</p>
      <p>{filters.text}</p>
    </div>
  );
};

ExpenseList.propTypes = {
  expenses: PropTypes.object,
  filters: PropTypes.object,
};

const mapStateToProps = state => {
  return {
    expenses: state.expenses,
    filters: state.filters,
  };
};
export default connect(mapStateToProps)(ExpenseList);
