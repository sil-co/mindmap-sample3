
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './navigation/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Reports from './pages/Reports';
import Map from './component/Map';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/products" exact element={<Products />} />
        <Route path="/reports" exact element={<Reports />} />
        <Route path="/map" exact element={<Map />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
