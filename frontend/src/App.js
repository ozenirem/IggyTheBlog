import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Travel from './components/Travel';
import Recipe from './components/Recipe';
import AdminPanel from './components/AdminPanel';
import WhoAmI from "./components/WhoAmI";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/recipes" element={<Recipe />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/whoami" element={<WhoAmI />} />
      </Routes>
    </Router>
  );
}

export default App;