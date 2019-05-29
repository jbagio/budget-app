import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../redux/actions/expenses';
import PropTypes from 'prop-types';

export class EditExpensePage extends Component {
  handleEditExpense = updates => {
    this.props.onEditExpense(this.props.expense.id, updates);
    this.props.history.push('/');
  };

  handleRemoveExpense = () => {
    this.props.onRemoveExpense(this.props.expense);
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.handleEditExpense}
        />
        <button onClick={this.handleRemoveExpense}>Remove</button>
      </div>
    );
  }
}

EditExpensePage.propTypes = {
  expense: PropTypes.object,
  onEditExpense: PropTypes.func,
  onRemoveExpense: PropTypes.func,
  history: PropTypes.object,
};

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.match.params.id),
});

const mapDispatchToProps = dispatch => ({
  onEditExpense: (id, updates) => dispatch(editExpense(id, updates)),
  onRemoveExpense: expense => dispatch(removeExpense(expense)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditExpensePage);
