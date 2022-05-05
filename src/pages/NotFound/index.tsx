import React from 'react';

import styles from './styles.module.scss';

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <h1>404</h1>
      <p>Sorry, page not found :(</p>
    </div>
  );
};

export default NotFound;
