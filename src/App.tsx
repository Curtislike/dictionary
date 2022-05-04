import React from 'react';

import Header from './components/Header';
import SearchBox from './common/components/SearchBox';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="searchWrap">
        <SearchBox />
      </div>
    </div>
  );
}

export default App;
