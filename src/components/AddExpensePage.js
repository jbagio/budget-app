import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../redux/actions/expenses';
import PropTypes from 'prop-types';

export class AddExpensePage extends Component {
  handleSubmit = expense => {
    this.props.onAddExpense(expense);
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <h1>Add expense</h1>
        <ExpenseForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

AddExpensePage.propTypes = {
  onAddExpense: PropTypes.func,
  history: PropTypes.object,
};

const mapDispatchToProps = dispatch => ({
  onAddExpense: expense => dispatch(addExpense(expense)),
});

export default connect(
  null,
  mapDispatchToProps
)(AddExpensePage);
