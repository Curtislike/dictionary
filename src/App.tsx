import React from 'react';
import { Route, Routes } from 'react-router-dom';

import ResultPage from './pages/ResultPage';
import HomePage from './pages/HomePage';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="result" element={<ResultPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
