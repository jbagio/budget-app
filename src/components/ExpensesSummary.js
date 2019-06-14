import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import numbro from 'numbro';
import { getVisibleExpenses } from '../redux/selectors/expenses';
import { getExpensesTotal } from '../redux/selectors/expenses-total';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  const pluralizedExpenses = expenseCount === 1 ? 'expense' : 'expenses';
  const formattedTotal = numbro(expensesTotal / 100).formatCurrency({
    mantissa: 2,
    thousandSeparated: true,
  });

  return (
    <div>
      <h1>
        Viewing {expenseCount} {pluralizedExpenses}, totalling {formattedTotal}
      </h1>
    </div>
  );
};

ExpensesSummary.propTypes = {
  expenseCount: PropTypes.number,
  expensesTotal: PropTypes.number,
};

const mapStateToProps = (state, props) => {
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: getExpensesTotal(visibleExpenses),
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
