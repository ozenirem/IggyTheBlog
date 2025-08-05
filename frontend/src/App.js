import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Travel from './components/Travel/Travel';
import Recipe from './components/Recipe/Recipe';
import AdminPanel from './components/AdminPanel';
import WhoAmI from "./components/WhoAmI";
import AddCityForm from './components/Travel/AddCityForm';
import TravelDetail from './components/Travel/TravelDetail';
import CityDetail from './components/Travel/CityDetail';





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
        <Route path="/add-city" element={<AddCityForm />} />
        <Route path="/travel/:country/:city" element={<TravelDetail />} />
        <Route path="/travel/:country/:city" element={<CityDetail />} />
      </Routes>
    </Router>
  );
}

export default App;