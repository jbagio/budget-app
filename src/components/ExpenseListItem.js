import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import numbro from 'numbro';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <h3>
      <Link to={`/edit/${id}`}>{description}</Link>
    </h3>
    <p>
      {numbro(amount / 100).formatCurrency({
        mantissa: 2,
        thousandSeparated: true,
      })}
      - {moment(createdAt).format('MMMM Do, YYYY')}
    </p>
  </div>
);

ExpenseListItem.propTypes = {
  id: PropTypes.string,
  description: PropTypes.string,
  amount: PropTypes.number,
  createdAt: PropTypes.number,
};

export default ExpenseListItem;
