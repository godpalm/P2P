// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EnergyP2PTrading from './pages/main/index';
import SignInPages from './pages/authentication/login'; // <-- ตรวจสอบ path จริง
import SignUpPages from './pages/authentication/register';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EnergyP2PTrading />} />
        <Route path="/authentication/login" element={<SignInPages />} />
        <Route path="/authentication/register" element={<SignUpPages />} />
      </Routes>
    </Router>
  );
};

export default App;
