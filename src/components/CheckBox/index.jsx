import React from 'react';
import styles from './CheckBox.module.scss';

const index = ({ title }) => {
  return (
    <div className={styles.sortItem}>
      <input
        type="checkbox"
        className={styles.customCheckbox}
        id={title}
        name={title}
        value="yes"
      />
      <label htmlFor={title}>{title}</label>
    </div>
  );
};

export default index;
