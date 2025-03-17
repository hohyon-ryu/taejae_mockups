import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './App.css';

// Pages
import LandingPage from './pages/LandingPage';
import MainPage from './pages/MainPage';
import QuestionDetailPage from './pages/QuestionDetailPage';
import ExplorationPage from './pages/ExplorationPage';

// Design Tool Components
import Canvas from './components/Canvas';
import Toolbar from './components/Toolbar';

function App() {
  // Check if we're in design mode or preview mode
  // Account for GitHub Pages base path
  const isDesignMode = window.location.pathname.endsWith('/design') || 
                       window.location.pathname === '/design';

  if (isDesignMode) {
    return (
      <DndProvider backend={HTML5Backend}>
        <div className="flex h-screen">
          <Toolbar />
          <Canvas zoom={1} />
        </div>
      </DndProvider>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/moiza" element={<MainPage />} />
        <Route path="/moiza/question/:id" element={<QuestionDetailPage />} />
        <Route path="/moiza/explore" element={<ExplorationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
