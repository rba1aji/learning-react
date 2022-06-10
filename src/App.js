import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <Link to="\knapsack">Knapsack</Link>
    </>
  );
};

export default function App() {
  return (
    <>
      <Nav />
      <Router>
        <Switch>
          <Route path="/knapsack" exact element="<Nav />" />
        </Switch>
      </Router>
    </>
  );
}
