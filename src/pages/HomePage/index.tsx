import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, Outlet, useLocation, useNavigate } from 'react-router-dom';
import SearchBox from '../../common/components/SearchBox';
import Header from '../../components/Header';
import { fetchWordDefenition } from '../../store/actions/wordDefinition.actions';
import ResultPage from '../ResultPage';

import styles from './styles.module.scss';

interface IHomePageProps {
  handleChangeWord(value: string): void;
  word: string;
}

const HomePage = ({ handleChangeWord, word }: IHomePageProps) => {
  return (
    <>
      <Header />
      <div className={styles.searchWrap}>
        <SearchBox handleChangeWord={handleChangeWord} word={word} />
      </div>
      <Outlet />
    </>
  );
};

export default HomePage;
