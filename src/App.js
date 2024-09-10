import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import GroceryList from "./components/GroceryList";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/grocery-list" element={<GroceryList />} />
        <Route path="/" to="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
