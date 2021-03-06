import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import searchImg from '../../../assets/search.svg';
import { fetchWordDefenition } from '../../../store/actions/wordDefinition.actions';

import styles from './styles.module.scss';

interface ISearchBoxProps {
  handleChangeWord(value: string): void;
  word: string;
}

const SearchBox = ({ handleChangeWord, word }: ISearchBoxProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (event: { target: { value: string } }) => {
    handleChangeWord(event.target.value);
  };

  const changePageNotFound = () => {
    navigate('/not-found');
  };

  const changePageSuccess = () => {
    navigate(`/${word}`);
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    dispatch(fetchWordDefenition(word, changePageNotFound, changePageSuccess));
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputWrap}>
        <input type="search" placeholder="Enter word..." value={word} onChange={handleInputChange} required />
      </div>
      <button>
        <img alt="search-img" src={searchImg} />
      </button>
    </form>
  );
};

export default SearchBox;
