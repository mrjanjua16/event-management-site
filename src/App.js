import React from 'react';
import './App.scss';
import Navbar from "./components/Main/Navbar";
import Home1 from './pages/Home1';
import Home2 from './pages/Home2';
import Speaker from './pages/Speaker';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import About from './pages/About';
import SpeakerDetail from './pages/SpeakerDetail';
import Gallery1 from './pages/Gallery1';
import Gallery2 from './pages/Gallery2';
import Testimonal from './pages/Testimonal';
import Price from './pages/Price';
import FAQ from './pages/FAQ';
import Error from './pages/Error';

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
      <Route path="/Home2" element={<Home2 />} />

      {/* Other Routes for different pages in your app */}
      <Route path="/Speaker" element={<Speaker />} />

      <Route path="/About" element={<About />} />

      <Route path="/SpeakerDetail" element={<SpeakerDetail />} />

      <Route path="/GalleryDetail" element={<Gallery1 />} />
      
      <Route path="/GalleryDetail2" element={<Gallery2 />} />

      <Route path='/Testimonal' element={<Testimonal />} />

      <Route path='/Price' element={<Price />} />

      <Route path='/FAQ' element={<FAQ />} />

      <Route path='/Error' element={<Error />} />

      {/* Catch-all Route for unmatched paths (optional) */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    </Router>
	</>
  );
}

export default App;