import { getExpensesTotal } from '../../../redux/selectors/expenses-total';
import expenses from '../../fixtures/expenses';

// should return 0 if no expenses
it('should return 0 if there are no filtered expenses', () => {
  expect(getExpensesTotal([])).toBe(0);
});

// should correctly add up a single expense
it('should correctly add up a single expense', () => {
  expect(getExpensesTotal([expenses[0]])).toBe(expenses[0].amount);
});

// should correctly add up multiple expenses
it('should correctly add up multiple expenses', () => {
  const total = expenses[0].amount + expenses[1].amount + expenses[2].amount;

  expect(getExpensesTotal(expenses)).toBe(total);
});
