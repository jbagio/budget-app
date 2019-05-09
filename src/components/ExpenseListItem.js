import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeExpense } from '../redux/modules/expenses';

const ExpenseListItem = ({ expense, dispatch }) => {
  return (
    <div>
      <h3>{expense.description}</h3>
      <p>
        {expense.amount} - {expense.createdAt}
      </p>
      <button onClick={() => dispatch(removeExpense(expense))}>Remove</button>
    </div>
  );
};

ExpenseListItem.propTypes = {
  expense: PropTypes.object,
  dispatch: PropTypes.func,
};

export default connect()(ExpenseListItem);
