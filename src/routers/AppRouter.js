import React from 'react';
import { BrowserRouter, Route, Switch, NavLink, Link } from 'react-router-dom';

const ExpenseDashboardPage = () => <div>Dashboard page</div>;

const AddExpensePage = () => <div>Add expense page</div>;

const EditExpensePage = () => <div>Edit expense page</div>;

const HelpPage = () => <div>Help page</div>;

const NotFoundPage = () => (
  <div>
    404! - <Link to="/">Home</Link>
  </div>
);

const Header = () => (
  <header>
    <h1>Budget app</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>
      Home
    </NavLink>
    <NavLink to="/create" activeClassName="is-active">
      Create expense
    </NavLink>
    <NavLink to="/edit" activeClassName="is-active">
      Edit expenses
    </NavLink>
    <NavLink to="/help" activeClassName="is-active">
      Help
    </NavLink>
  </header>
);

const AppRouter = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact={true} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
