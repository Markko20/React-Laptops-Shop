import React from 'react';
import styles from './CardOpen.module.scss';
import Header from '../../components/Header';
import Swiper from '../../components/Swiper';

const index = () => {
  return (
    <>
      <Header />

      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.mainInner}>
            
            <div className={styles.swiper}>
              <Swiper />
            </div>

            <div className={styles.mainInfo}>
              <h3 className={styles.mainTitle}>Ноутбук MSI GF76 Katana 11SC-483XRU</h3>
              <div className={styles.mainInfoBlock}>
                <div className={styles.mainInfoBlockInner}>
                  <span className={styles.oldPrice}>65000 ₽</span>
                  <span className={styles.newPrice}>60000 ₽</span>
                  <div className={styles.btns}>
                    <button className={styles.btn}>В корзину</button>
                    <img className={styles.heart} src="../../images/Heart.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className={styles.characteristics}>
          <div className={styles.characteristicsInner}>
            <h3 className={styles.characteristicsTitle}>Характеристики</h3>
            <div className={styles.characteristicsBlock}></div>
          </div>
        </div>

      </div>
    </>
  );
};

export default index;
