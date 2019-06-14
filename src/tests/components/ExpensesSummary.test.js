import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

it('should render ExpensesSummary with 1 expense', () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={1} expensesTotal={100} />
  );

  expect(wrapper).toMatchSnapshot();
});

it('should render ExpensesSummary with multiple expenses', () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={10} expensesTotal={10000} />
  );

  expect(wrapper).toMatchSnapshot();
});
