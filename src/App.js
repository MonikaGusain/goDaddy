import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReposList from './component/ReposList';
import RepoDetail from './component/RepoDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ReposList />} />
        <Route path="/repo/:repoId" element={<RepoDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
