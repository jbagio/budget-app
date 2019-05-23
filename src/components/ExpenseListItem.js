import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createdAt }) => {
  return (
    <div>
      <h3>
        <Link to={`/edit/${id}`}>{description}</Link>
      </h3>
      <p>
        {amount} - {createdAt}
      </p>
    </div>
  );
};

ExpenseListItem.propTypes = {
  id: PropTypes.string,
  description: PropTypes.string,
  amount: PropTypes.number,
  createdAt: PropTypes.number,
};

export default ExpenseListItem;
