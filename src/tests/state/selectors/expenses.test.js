import moment from 'moment';
import { getVisibleExpenses } from '../../../redux/selectors/expenses';
import expenses from '../../fixtures/expenses';

describe('Expenses selector', () => {
  it('should filter by text value', () => {
    const result = getVisibleExpenses(expenses, {
      text: 'b',
      sortBy: 'date',
    });

    expect(result).toEqual([expenses[2], expenses[1]]);
  });

  it('should filter by start date', () => {
    const result = getVisibleExpenses(expenses, {
      text: '',
      startDate: moment(0),
      sortBy: 'date',
    });

    expect(result).toEqual([expenses[2], expenses[0]]);
  });

  it('should filter by end date', () => {
    const result = getVisibleExpenses(expenses, {
      text: '',
      endDate: moment(0).add(2, 'days'),
      sortBy: 'date',
    });

    expect(result).toEqual([expenses[0], expenses[1]]);
  });

  it('should sort by date', () => {
    const result = getVisibleExpenses(expenses, {
      text: '',
      sortBy: 'date',
    });

    expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
  });

  it('should sort by date', () => {
    const result = getVisibleExpenses(expenses, {
      text: '',
      sortBy: 'amount',
    });

    expect(result).toEqual([expenses[1], expenses[0], expenses[2]]);
  });
});
