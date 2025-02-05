import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Counter from './components/Counter.jsx';
import UserDataForm from './components/UserDataForm.jsx';
import Dashboard from './components/Dashboard.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="rakesh722.github.io/assign/" element={<Counter />} />
        <Route path="rakesh722.github.io/assign//user-form" element={<UserDataForm />} />
        <Route path="rakesh722.github.io/assign//dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
