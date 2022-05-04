import React from 'react';

import styles from './styles.module.scss';

interface IButtonProps {
  title: string;
  onClick?(): void;
  isLoading?: boolean;
  isDisabled?: boolean;
}

const Button = ({ title, onClick, isLoading, isDisabled }: IButtonProps) => (
  <button disabled={isLoading || isDisabled} onClick={onClick} className={styles.button}>
    {title}
  </button>
);

export default Button;
