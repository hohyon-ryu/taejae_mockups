import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Pages
import LandingPage from './pages/LandingPage';
import MainPage from './pages/MainPage';
import QuestionDetailPage from './pages/QuestionDetailPage';
import ExplorationPage from './pages/ExplorationPage';
import PosterPage from './pages/PosterPage'; // Import the page using relative path
import SocialStructureMatrixPosterPage from './pages/SocialStructureMatrixPosterPage'; // Import the new poster page
import PostersListPage from './pages/PostersListPage'; // Import the posters list page
import TechnologyEvolutionPage from './pages/TechnologyEvolutionPage'; // Import the new interactive page

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
        <Route path="/posters" element={<PostersListPage />} /> {/* Route for posters list */}
        <Route path="/poster/digital-transformation-social-change" element={<PosterPage />} /> {/* Renamed route for first poster */}
        <Route path="/poster/social-structure-matrix" element={<SocialStructureMatrixPosterPage />} /> {/* Route for second poster */}
        <Route path="/technology-evolution" element={<TechnologyEvolutionPage />} /> {/* New interactive page */}
      </Routes>
    </Router>
  );
}

export default App;
