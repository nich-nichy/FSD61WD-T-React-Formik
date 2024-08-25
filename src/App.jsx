import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Books from './pages/Books';
import Authors from './pages/Authors';
import LibraryProvider from './context/LibraryContext';
import {
  BrowserRouter as Router, Route, Routes

} from 'react-router-dom';
function App() {
  return (
    <Router>
      <LibraryProvider>
        <div className="d-flex bg-light poppins-regular">
          <Sidebar />
          <div style={{ width: '100%' }}>
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route path="/books" element={<Books />} />
              <Route path="/authors" element={<Authors />} />
            </Routes>
          </div>
        </div>
      </LibraryProvider>
    </Router>
  );
}

export default App;