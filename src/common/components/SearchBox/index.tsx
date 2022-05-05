import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import searchImg from '../../../assets/search.svg';
import { fetchWordDefenition } from '../../../store/actions/wordDefinition.actions';
import { getWordDefinitionSelector } from '../../../store/selectors/wordDefenition.selectors';

import styles from './styles.module.scss';

const SearchBox = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const navigate = useNavigate();
  const wordDefenition = useSelector(getWordDefinitionSelector);

  const handleInputChange = (event: { target: { value: string } }) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    dispatch(fetchWordDefenition(value));
    if (wordDefenition.length) {
      navigate('/result');
    }
    navigate('/not-found');
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
