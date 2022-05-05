import React from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import SearchBox from '../../common/components/SearchBox';
import Header from '../../components/Header';
import ResultPage from '../ResultPage';

import styles from './styles.module.scss';

const HomePage = () => {
  return (
    <>
      <Header />
      <div className={styles.searchWrap}>
        <SearchBox />
      </div>
      <Outlet />
    </>
  );
};

export default HomePage;
