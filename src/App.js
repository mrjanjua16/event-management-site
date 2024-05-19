import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import Home1 from './pages/Home1';
import Home2 from './pages/Home2';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
  <>
    <Router>
    <Navbar />
    <Routes>
      {/* Home Route (can be with or without exact path) */}
      <Route path="/" element={<Home1 />} />  
	    {/* Renders Home at exact path "/" */}
      {/*<Route exact path="/" element={<Home />} />*/}

      {/* Other Routes for different pages in your app */}
      <Route path="/Event" element={<Home2 />} />

      {/* Catch-all Route for unmatched paths (optional) */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    </Router>
	</>
  );
}

export default App;
