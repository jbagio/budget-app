import moment from 'moment';
import { getVisibleExpenses } from '../../../state/selectors/expenses';

const expenses = [
  {
    id: '1',
    description: 'foo',
    note: '',
    amount: '20',
    createdAt: moment(0),
  },
  {
    id: '2',
    description: 'bar',
    note: '',
    amount: '30',
    createdAt: moment(0)
      .subtract(3, 'days')
      .valueOf(),
  },
  {
    id: '3',
    description: 'baz',
    note: '',
    amount: '10',
    createdAt: moment(0)
      .add(3, 'days')
      .valueOf(),
  },
];

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
