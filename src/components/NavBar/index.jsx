import React from 'react';
import styles from './NavBar.module.scss';
import SortItem from '../SortItem';
import axios from 'axios';

const index = () => {
  /* eslint-disable */
  const [data, setData] = React.useState();

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:5000/navBarItems');
        setData(res.data);
      } catch (error) {
        console.error(error);
        alert('Ошибка при запросе данных ;(');
      }
    };
    fetchData();
  }, []);

  console.log(data);

  return (
    <div className={styles.wrapper}>
      <div className={styles.block}>
        <div className={styles.inputWrapper}>
          <h3 className={styles.inputTitle}>Ценна</h3>
          <div className={styles.inputBlock}>
            <input className={styles.input} placeholder='от 30000' type="text" />
            <input className={styles.input} placeholder='до 180000' type="text" />
          </div>
        </div>
        <div className="accordion" id="accordionPanelsStayOpenExample">
          {data &&
            data.map((obj) => {
              return <SortItem id={obj.id} name={obj.title} items={obj.items} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default index;
