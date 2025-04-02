import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Pages
import LandingPage from './pages/LandingPage';
import MainPage from './pages/MainPage';
import QuestionDetailPage from './pages/QuestionDetailPage';
import ExplorationPage from './pages/ExplorationPage';
import PosterPage from './pages/PosterPage'; // Import the page using relative path

// Components
// import Poster from './components/Poster'; // Remove direct Poster import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/moiza" element={<MainPage />} />
        <Route path="/moiza/question/:id" element={<QuestionDetailPage />} />
        <Route path="/moiza/explore" element={<ExplorationPage />} />
        <Route path="/poster" element={<PosterPage />} /> {/* Use PosterPage for the route */}
      </Routes>
    </Router>
  );
}

export default App;
