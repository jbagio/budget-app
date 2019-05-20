import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ExpenseListItem from './ExpenseListItem';
import { getVisibleExpenses } from '../state/selectors/expenses';

const ExpenseList = ({ expenses }) => {
  return (
    <div>
      <h1>Expense list</h1>
      {expenses.map(expense => (
        <ExpenseListItem key={expense.id} expense={expense} />
      ))}
    </div>
  );
};

ExpenseList.propTypes = {
  expenses: PropTypes.array,
  filters: PropTypes.object,
};

const mapStateToProps = state => {
  return {
    expenses: getVisibleExpenses(state.expenses, state.filters),
  };
};

export default connect(mapStateToProps)(ExpenseList);
