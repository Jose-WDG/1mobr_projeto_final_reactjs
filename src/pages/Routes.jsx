import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FreelancerList from '../components/FreelancerList';
import FreelancerDetails from '../components/FreelancerDetails';
import Home from './Home';

const Rota = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        
        <Route path="/freelancer/:id" element={<FreelancerDetails />} />
      </Routes>
    </Router>
  );
};

export default Rota;