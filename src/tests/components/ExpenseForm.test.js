import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

it('should render ExpenseForm correctly', () => {
  const wrapper = shallow(<ExpenseForm />);

  expect(wrapper).toMatchSnapshot();
});

it('should render ExpenseForm with data', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);

  expect(wrapper).toMatchSnapshot();
});

it('should render error for invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm />);

  expect(wrapper).toMatchSnapshot();

  wrapper.find('form').simulate('submit', { preventDefault: () => {} });

  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

it('should set description on input change', () => {
  const wrapper = shallow(<ExpenseForm />);
  const value = 'foo';

  wrapper
    .find('input')
    .at(0)
    .simulate('change', {
      target: { value },
    });

  expect(wrapper.state('description')).toBe(value);
});

it('should set note on textarea change', () => {
  const wrapper = shallow(<ExpenseForm />);
  const value = 'foo';

  wrapper.find('textarea').simulate('change', {
    target: { value },
  });

  expect(wrapper.state('note')).toBe(value);
});

it('should set amount on valid input', () => {
  const wrapper = shallow(<ExpenseForm />);
  const value = '666';

  wrapper
    .find('input')
    .at(1)
    .simulate('change', {
      target: { value },
    });

  expect(wrapper.state('amount')).toBe(value);
});

it('should not set amount on invalid input', () => {
  const wrapper = shallow(<ExpenseForm />);
  const value = 'foo';

  wrapper
    .find('input')
    .at(1)
    .simulate('change', {
      target: { value },
    });

  expect(wrapper.state('amount')).toBe('');
});

it('should call onSubmit prop', () => {
  const handler = jest.fn();
  const wrapper = shallow(
    <ExpenseForm expense={expenses[0]} onSubmit={handler} />
  );

  wrapper.find('form').simulate('submit', { preventDefault: () => {} });

  const { description, amount, note, createdAt, ...id } = expenses[0];

  expect(wrapper.state('error')).toBe('');
  expect(handler).toHaveBeenLastCalledWith({
    description,
    amount,
    note,
    createdAt,
  });
});
