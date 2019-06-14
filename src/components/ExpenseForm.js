import React, { Component } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import PropTypes from 'prop-types';

class ExpenseForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.expense ? props.expense.description : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      note: props.expense ? props.expense.note : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      isDatePickerFocused: false,
      error: '',
    };
  }

  handleDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  handleAmountChange = e => {
    const amount = e.target.value;

    if (!amount || amount.match(/^\d+(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  handleDateChange = createdAt => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };

  handleFocusChange = ({ focused }) => {
    this.setState(() => ({ isDatePickerFocused: focused }));
  };

  handleNoteChange = e => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };

  handleSubmit = e => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: 'Please provide description and amount' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note,
      });
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.handleDescriptionChange}
          />
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.handleAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.handleDateChange}
            focused={this.state.isDatePickerFocused}
            onFocusChange={this.handleFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
            displayFormat={'DD/MM/YYYY'}
          />
          <textarea
            placeholder="Add a note to this expense (optional)"
            value={this.state.note}
            onChange={this.handleNoteChange}
          />
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

ExpenseForm.propTypes = {
  onSubmit: PropTypes.func,
  expense: PropTypes.object,
};

export default ExpenseForm;
