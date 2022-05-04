import React from 'react';

import searchImg from '../../../assets/search.svg';

import styles from './styles.module.scss';

const SearchBox = () => {
  return (
    <form className={styles.form}>
      <div className={styles.inputWrap}>
        <input type="search" placeholder="Enter word..." />
      </div>
      <button>
        <img alt="search-img" src={searchImg} />
      </button>
    </form>
  );
};

export default SearchBox;
