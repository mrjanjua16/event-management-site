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
import Schedule from "./pages/Schedule";
import SponsorsPage from './pages/Sponsors';
import NewsWithoutSlider from "./pages/News/NewsWithoutSlider";
import NewsWithRightSlider from './pages/News/NewsWithRightSlider';
import NewsWithLeftSlider from './pages/News/NewsWithLeftSlider';
import NewsSinglePage from './pages/News/NewsSinglePage';
import Contact from './pages/Contact';


export default function App() {
  return (
  <>
    <Router basename='/reacttask'>
    <Navbar />
    <Routes>

      <Route path="/" element={<Home1 />} />  

      <Route path="/Home2" element={<Home2 />} />

      <Route path="/Speaker" element={<Speaker />} />

      <Route path="/About" element={<About />} />

      <Route path="/SpeakerDetail" element={<SpeakerDetail />} />

      <Route path="/GalleryDetail" element={<Gallery1 />} />
      
      <Route path="/GalleryDetail2" element={<Gallery2 />} />

      <Route path='/Testimonal' element={<Testimonal />} />

      <Route path='/Price' element={<Price />} />

      <Route path='/FAQ' element={<FAQ />} />

      <Route path='/Error' element={<Error />} />

      <Route path='/Schedule' element={<Schedule />} />

      <Route path='/Sponsors' element={<SponsorsPage />} />

      <Route path='/NewsWithoutSlider' element={<NewsWithoutSlider />} />
      
      <Route path='/NewsWithRightSlider' element={<NewsWithRightSlider />} />

      <Route path='/NewsWithLeftSlider' element={<NewsWithLeftSlider />} />

      <Route path='/NewsSinglePage' element={<NewsSinglePage />} />

      <Route path='/Contact' element={<Contact />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    </Router>
	</>
  );
}