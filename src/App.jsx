import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Counter from './components/Counter.jsx';
import UserDataForm from './components/UserDataForm.jsx';
import Dashboard from './components/Dashboard.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="https://rakesh722.github.io/assign/" element={<Counter />} />
        <Route path="https://rakesh722.github.io/assign/user-form" element={<UserDataForm />} />
        <Route path=" https://rakesh722.github.io/assign/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
