import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../redux/actions/expenses';
import PropTypes from 'prop-types';

const AddExpensePage = ({ dispatch, history }) => (
  <div>
    <h1>Add expense page</h1>
    <ExpenseForm
      onSubmit={expense => {
        dispatch(addExpense(expense));
        history.push('/');
      }}
    />
  </div>
);

AddExpensePage.propTypes = {
  dispatch: PropTypes.func,
  history: PropTypes.object,
};

export default connect()(AddExpensePage);
