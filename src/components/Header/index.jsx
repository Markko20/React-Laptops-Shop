import React, { useState } from 'react';
import styles from './Header.module.scss';
import { Link, useLocation } from 'react-router-dom';
import Search from '../Search'

const index = () => {
  /* eslint-disable */
  const { pathname } = useLocation();
  
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.name}>
        React Laptops Shop
      </Link>
      {pathname === '/' && <Search />}

      <div className={styles.images}>
        {pathname !== '/favorites' && (
          <Link to="/favorites">
            <img className={styles.favorite} src="../../images/Heart.svg" alt="" />
          </Link>
        )}

        {pathname !== '/cart' && (
          <Link className={styles.cartBlock} to="/cart">
            <h4 className={styles.price}>18000 ₽</h4>
            <img className={styles.cartImg} src="../../images/cart.svg" alt="" />
          </Link>
        )}
      </div>
    </header>
  );
};

export default index;
