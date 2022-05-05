import React from 'react';
import { Route, Routes } from 'react-router-dom';

import ResultPage from './pages/ResultPage';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="result" element={<ResultPage />} />
        </Route>
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
