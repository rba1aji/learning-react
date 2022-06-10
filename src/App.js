import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Knapsack from './components/Knapsack'

function Nav() {
  return (
    <>
      hey
      {/* <p><Link to="\knapsack">Knapsack</Link></p> */}
    </>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <Router>
        <Switch>
          <Route path="/knapsack" exact component={Knapsack} />
        </Switch>
      </Router>
    </>
  );
}
