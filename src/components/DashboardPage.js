import React from 'react';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseList from './ExpenseList';
import ExpensesSummary from './ExpensesSummary';

const DashboardPage = () => (
  <div>
    <ExpensesSummary />
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default DashboardPage;
