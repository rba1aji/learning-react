import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Knapsack from './components/Knapsack';
// import Knapsack from './components/Knapsack'

function Nav() {
  return (
    <>
      hey
      <p><Link to="/knapsack">Knapsack</Link></p>
    </>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <Router>
        <Routes>
           <Route path="/" element={<Knapsack/>} />
        </Routes>
      </Router>
    </>
  );
}
