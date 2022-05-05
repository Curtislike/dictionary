import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import searchImg from '../../../assets/search.svg';
import { fetchWordDefenition } from '../../../store/actions/wordDefinition.actions';

import styles from './styles.module.scss';

const SearchBox = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const handleInputChange = (event: { target: { value: string } }) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    dispatch(fetchWordDefenition(value));
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputWrap}>
        <input type="search" placeholder="Enter word..." value={value} onChange={handleInputChange} required />
      </div>
      <button>
        <img alt="search-img" src={searchImg} />
      </button>
    </form>
  );
};

export default SearchBox;
