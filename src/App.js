import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  useNavigate,
} from 'react-router-dom';
import Knapsack from './components/Knapsack';
import Floyds from './components/Floyds';
import Warshalls from './components/Warshalls';
// import Knapsack from './pages/Knapsack';

const Layout=()=> {
  const navigate = useNavigate();
  const handleChange = (event) => {
    const val=event.target.value;
    navigate(val)
  };
  return (
    <>
      <select onChange={handleChange}>
        <option value="/index">select</option>
        <option value="/knapsack">Knapsack </option>
        <option value="/floyds">Floyds </option>
        <option value="/warshalls">warshalls </option>
      </select>
      <Outlet />
    </>
  );
}

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="index" element={null} />
            <Route path="knapsack" element={<Knapsack />} />
            <Route path="floyds" element={<Floyds />} />
            <Route path="warshalls" element={<Warshalls />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}