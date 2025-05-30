import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';

// Pages
import Home from './pages/Home';
import Education from './pages/Education';
import MenstrualHealth from './pages/MenstrualHealth';
import Mentorship from './pages/Mentorship';
import Safety from './pages/Safety';
import Vocational from './pages/Vocational';
import Analytics from './pages/Analytics';
import Attendance from './pages/Attendance';
import Rewards from './pages/Rewards';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/health" element={<MenstrualHealth />} />
          <Route path="/mentorship" element={<Mentorship />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/vocational" element={<Vocational />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/rewards" element={<Rewards />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;