import React from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import CardItem from '../components/CardItem';
import '../scss/home.scss';
import axios from 'axios';

const Home = () => {
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get('http://localhost:5000/data');

        setIsLoading(false);
        setData(res.data);
      } catch (error) {
        console.error(error);
        alert('Ошибка при запросе данных ;(');
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <Header />

      <div className="container">
        <div className="home__wrapper">
          <NavBar className="navBar" />
          <div className="card-items">
            {!isLoading &&
              data.map((obj, i) => {
                return (
                  <CardItem
                    key={i}
                    title={`${obj.manufacturer} ${obj.model}`}
                    oldPrice={obj.priceWithoutDiscount}
                    newPrice={obj.price}
                  />
                );
              })}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
