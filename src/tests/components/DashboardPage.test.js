import React from 'react';
import { shallow } from 'enzyme';
import DashBoardPage from '../../components/DashboardPage';

it.only('should render Header correctly', () => {
  const wrapper = shallow(<DashBoardPage />);

  expect(wrapper).toMatchSnapshot();
});
