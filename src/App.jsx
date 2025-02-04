import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Counter from './components/Counter.jsx';
import UserDataForm from './components/UserDataForm.jsx';
import Dashboard from './components/Dashboard.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="http://localhost:5174/" element={<Counter />} />
        <Route path="http://localhost:5174/user-form" element={<UserDataForm />} />
        <Route path=" http://localhost:5174/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
