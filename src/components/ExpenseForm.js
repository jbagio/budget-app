import React, { Component } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

class ExpenseForm extends Component {
  state = {
    description: '',
    amount: '',
    note: '',
    createdAt: moment(),
    isDatePickerFocused: false,
  };

  handleDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  handleAmountChange = e => {
    const amount = e.target.value;

    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  handleDateChange = createdAt => {
    this.setState(() => ({ createdAt }));
  };

  handleFocusChange = ({ focused }) => {
    this.setState(() => ({ isDatePickerFocused: focused }));
  };

  handleNoteChange = e => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };

  render() {
    return (
      <div>
        <form>
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
          />
          <textarea
            placeholder="Add a note to this expense (optional)"
            value={this.state.note}
            onChange={this.handleNoteChange}
          />
        </form>
      </div>
    );
  }
}

export default ExpenseForm;
