import React from 'react';

import Header from './components/Header';
import SearchBox from './common/components/SearchBox';

import './App.scss';
import ResultPage from './pages/ResultPage';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="searchWrap">
        <SearchBox />
        <ResultPage />
      </div>
    </div>
  );
}

export default App;
