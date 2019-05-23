import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ExpenseListItem from './ExpenseListItem';
import { getVisibleExpenses } from '../state/selectors/expenses';

export const ExpenseList = ({ expenses }) => {
  return (
    <div>
      {expenses.length === 0 ? (
        <p>No expenses</p>
      ) : (
        expenses.map(expense => (
          <ExpenseListItem key={expense.id} {...expense} />
        ))
      )}
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
