import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Counter from './components/Counter.jsx';
import UserDataForm from './components/UserDataForm.jsx';
import Dashboard from './components/Dashboard.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="assign/" element={<Counter />} />
        <Route path="assign/user-form" element={<UserDataForm />} />
        <Route path="assign/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
