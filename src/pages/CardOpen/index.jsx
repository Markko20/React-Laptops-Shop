import React from 'react';
import styles from './CardOpen.module.scss';
import Header from '../../components/Header';
import Swiper from '../../components/Swiper';
import axios from 'axios';
import { useParams } from 'react-router';

const index = () => {
  /* eslint-disable */
  const { id } = useParams();
  const [obj, setObj] = React.useState('');

  React.useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('http://localhost:5000/data');
      data.forEach((element) => {
        if (element.id === id) {
          setObj(element);
        }
      });
    };
    fetchData();

    scrollTo(0, 0)
  }, []);

  return (
    <>
      <Header />

      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.swiper}>
            <Swiper />
          </div>

          <div className={styles.mainInfo}>
            <h3 className={styles.mainTitle}>{`Ноутбук ${obj.manufacturer} ${obj.model}`}</h3>
            <div className={styles.mainInfoBlock}>
              <div className={styles.mainInfoBlockInner}>
                {obj.priceWithoutDiscount !== 0 && (
                  <span className={styles.oldPrice}>{obj.priceWithoutDiscount} ₽</span>
                )}
                <span className={styles.newPrice}>{obj.price} ₽</span>
                <div className={styles.btns}>
                  <button className={styles.btn}>В корзину</button>
                  <img className={styles.heart} src="../../images/Heart.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.characteristics}>
          <h3 className={styles.characteristicsTitle}>Характеристики</h3>
          <div className={styles.characteristicsBlock}>
            <div className={styles.characteristicsItem}>
              <h3 className={styles.characteristicsItemName}>Производитель:</h3>
              <h3 className={styles.characteristicsItemParam}>{obj.manufacturer}</h3>
            </div>
            <div className={styles.characteristicsItem}>
              <h3 className={styles.characteristicsItemName}>Модель:</h3>
              <h3 className={styles.characteristicsItemParam}>{obj.model}</h3>
            </div>
            <div className={styles.characteristicsItem}>
              <h3 className={styles.characteristicsItemName}>Операционная система:</h3>
              <h3 className={styles.characteristicsItemParam}>{obj.os}</h3>
            </div>
            <div className={styles.characteristicsItem}>
              <h3 className={styles.characteristicsItemName}>Встроенная видеокарта:</h3>
              <h3 className={styles.characteristicsItemParam}>{obj.IntegratedGraphics}</h3>
            </div>
            <div className={styles.characteristicsItem}>
              <h3 className={styles.characteristicsItemName}>Дискретная видеокарта:</h3>
              <h3 className={styles.characteristicsItemParam}>
                {obj.DiscreteGraphicsCard}
              </h3>
            </div>
            <div className={styles.characteristicsItem}>
              <h3 className={styles.characteristicsItemName}>SSD:</h3>
              <h3 className={styles.characteristicsItemParam}>{obj.ssd}</h3>
            </div>
          </div>
        </div>

        <div className={styles.description}>
          <h3 className={styles.descriptionTitle}>Описание</h3>
          <h2 className={styles.descriptionText}>
            {obj.Description}
          </h2>
        </div>
      </div>
    </>
  );
};

export default index;
