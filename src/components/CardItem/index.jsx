import React from 'react';
import styles from './CardItem.module.scss';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const index = ({ title, oldPrice, newPrice, id }) => {
  /* eslint-disable */

  const navigate = useNavigate()

  return (
    <div className={styles.item}>
      <div className={styles.wrapper}>
        <Link to={`/cardItem/${id}`} className={styles.divWrapper}>
          <img className={styles.img} src="https://placehold.co/244x144" alt="" />
          <h3 className={styles.title}>{title}</h3>
        </Link>
        {oldPrice !== 0 && <h3 className={styles.oldPrice}>{`${oldPrice} ₽`}</h3>}
        <div className={styles.block}>
          <h3 className={styles.price}>{`${newPrice} ₽`}</h3>
          <div className={styles.btns}>
            <img className={styles.heart} src="../../images/Heart.svg" alt="" />
            <img src="../../images/cart.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
