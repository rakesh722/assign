import React from 'react';
import { HashRouter , Routes, Route } from 'react-router-dom';
import Counter from './components/Counter.jsx';
import UserDataForm from './components/UserDataForm.jsx';
import Dashboard from './components/Dashboard.jsx';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="assign/" element={<Counter />} />
        <Route path="assign/user-form" element={<UserDataForm />} />
        <Route path="assign/dashboard" element={<Dashboard />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
