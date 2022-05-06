import React from 'react';
import { Outlet } from 'react-router-dom';

import SearchBox from '../../common/components/SearchBox';
import Header from '../../components/Header';

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
