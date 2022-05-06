import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import ResultPage from './pages/ResultPage';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';

import './App.scss';
import { useDispatch } from 'react-redux';
import { fetchWordDefenition } from './store/actions/wordDefinition.actions';

function App() {
  const [word, setWord] = useState('');
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChangeWord = (value: React.SetStateAction<string>) => {
    setWord(value);
  };

  const changePageNotFound = () => {
    navigate('/not-found');
  };

  useEffect(() => {
    const path = location.pathname.split('/')[1];
    if (path.length === 0 || path === word || path === 'not-found') {
      return;
    }
    dispatch(fetchWordDefenition(path, changePageNotFound));
    setWord(path);
  }, [location]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage handleChangeWord={handleChangeWord} word={word} />}>
          <Route path=":word" element={<ResultPage />} />
        </Route>
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
