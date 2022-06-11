import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Knapsack from './components/Knapsack'
import Floyds from './components/Floyds'
import Warshalls from './components/Warshalls'
// import Knapsack from './pages/Knapsack';

function Nav() {
  return (
    <>
      hey
      <p>
        <a href="/knapsack">Knapsack </a><br/>
        <a href="/floyds">Floyds </a><br/>
        <a href="/warshalls">warshalls </a>
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
           <Route path="/" exact element={<Nav/>} />
           <Route path="/knapsack" exact element={<Knapsack/>} />
           <Route path="/floyds" exact element={<Floyds/>} />
           <Route path="/warshalls" exact element={<Warshalls/>} />
           
        </Routes>
      </Router>
    </>
  );
}
