import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ expense }) => {
  return (
    <div>
      <h3>
        <Link to={`/edit/${expense.id}`}>{expense.description}</Link>
      </h3>
      <p>
        {expense.amount} - {expense.createdAt}
      </p>
    </div>
  );
};

ExpenseListItem.propTypes = {
  expense: PropTypes.object,
  dispatch: PropTypes.func,
};

export default connect()(ExpenseListItem);
