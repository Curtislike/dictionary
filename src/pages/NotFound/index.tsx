import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../common/components/Button';

import styles from './styles.module.scss';

const NotFound = () => {
  const navigate = useNavigate();

  const goToMainPage = () => {
    navigate('/');
  };

  return (
    <div className={styles.notFound}>
      <h1>404</h1>
      <p>Sorry, page not found :(</p>
      <Button title="Back" onClick={goToMainPage} />
    </div>
  );
};

export default NotFound;
