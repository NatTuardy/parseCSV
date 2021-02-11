import React from 'react';
import styles from './ErrorBlock.module.css';

function ErrorBlock() {
  return (
    <div className={styles.errorBlock}>
      <p>File format is not correct</p>
    </div>
  );
}

export default ErrorBlock;
