import React from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet, Link } from 'react-router-dom'
import Knapsack from './components/Knapsack'
import Floyds from './components/Floyds'
import Warshalls from './components/Warshalls'
// import Knapsack from './pages/Knapsack';

function Nav() {
  return (
    <>
      {/* hey */}
      <p>
        <a href="/knapsack">Knapsack </a><br/>
        <a href="/floyds">Floyds </a><br/>
        <a href="/warshalls">warshalls </a>
      </p>
      <Outlet />
    </>
  );
}

export default function App() {
  return (
    <>
      {/* <Nav /> */}
      <Router>
        <Routes>
           <Route path="/" element={<Nav/>} >
             <Route index element={<Nav/>}/>
           <Route path="knapsack" element={<Knapsack/>} />
           <Route path="floyds" element={<Floyds/>} />
           <Route path="warshalls" element={<Warshalls/>} />
           </Route>
        </Routes>
      </Router>
    </>
  );
}
