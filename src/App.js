import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Link,
} from 'react-router-dom';
import Knapsack from './components/Knapsack';
import Floyds from './components/Floyds';
import Warshalls from './components/Warshalls';
// import Knapsack from './pages/Knapsack';

function Nav() {
  return (
    <>
      {/* hey */}
      <p>
        <Link to="/knapsack">Knapsack </Link>
        <br />
        <Link to="/floyds">Floyds </Link>
        <br />
        <Link to="/warshalls">warshalls </Link>
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
          <Route path="/" element={<Nav />}>
            <Route index element={<Nav />} />
            <Route path="knapsack" element={<Knapsack />} />
            <Route path="floyds" element={<Floyds />} />
            <Route path="warshalls" element={<Warshalls />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
