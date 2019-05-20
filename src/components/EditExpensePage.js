import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../state/actions/expenses';
import PropTypes from 'prop-types';

const EditExpensePage = ({ expense, dispatch, history }) => (
  <div>
    <ExpenseForm
      expense={expense}
      onSubmit={updatedExpense => {
        dispatch(editExpense(expense.id, updatedExpense));
        history.push('/');
      }}
    />
    <button
      onClick={() => {
        dispatch(removeExpense(expense.id));
        history.push('/');
      }}
    >
      Remove
    </button>
  </div>
);

EditExpensePage.propTypes = {
  expense: PropTypes.object,
  dispatch: PropTypes.func,
  history: PropTypes.object,
};

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.match.params.id),
});

export default connect(mapStateToProps)(EditExpensePage);
