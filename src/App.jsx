import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import NavBar from './NavBar';
import BranchesPage from './pages/BranchesPage'; 
import ProductsPage from './pages/ProductsPage';

// Page components
import HomePage from './pages/HomePage';
function App() {
  return (
    <Router>
      <NavBar />

      {/* Define your routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/branches" element={<BranchesPage />} /> {/* Add the branches route */}
        <Route path="/ProductsPage" element={<ProductsPage />} /> 
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;