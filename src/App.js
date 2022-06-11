import React from 'react';
import { BrowserRouter as Router, Switch, Routes, Route, Link } from 'react-router-dom';
// import Knapsack from './components/Knapsack';
import Knapsack from './pages/Knapsack';

function Nav() {
  return (
    <>
      hey
      <p>
        <a href="/knapsack">Knapsack</a>
      </p>
    </>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <Router>
        <Routes>
           <Route path="/knapsack" exact element={Knapsack} />
        </Routes>
      </Router>
    </>
  );
}
