import React from 'react';

import Button from '../../common/components/Button';

import styles from './styles.module.scss';

const Header = () => {
  return (
    <header>
      <div className={styles.logo}>Minsk Online Dictionary</div>
      <div className={styles.title}>Make your words meaningful</div>
      <Button title="Sign up" />
    </header>
  );
};

export default Header;
