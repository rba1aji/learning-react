import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  useNavigate
} from "react-router-dom";
import Knapsack from "./components/Knapsack";
import Floyds from "./components/Floyds";
import Warshalls from "./components/Warshalls";
// import Knapsack from './pages/Knapsack';
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const Layout = () => {
  const navigate = useNavigate();
  const handleChange = (event) => {
    const val = event.target.value;
    navigate(val);
  };
  return (
    <>
      <Box>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Select</InputLabel>
          <Select
            // label="Select"
            id="demo-simple-select"
            onChange={handleChange}
          >
            {/* <option value="/index">select</option> */}
            <option value="/knapsack">Knapsack </option>
            <option value="/floyds">Floyds </option>
            <option value="/warshalls">warshalls </option>
          </Select>
        </FormControl>
      </Box>
      <Outlet />
    </>
  );
};

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
