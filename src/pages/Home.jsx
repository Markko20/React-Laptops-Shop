import React from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import CardItem from '../components/CardItem';
import '../scss/home.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/slices/navBarSlice';

const Home = () => {
  const dispatch = useDispatch();
  const { laptops, isLoading, sortItems } = useSelector((state) => state.navBarSlice);

  React.useEffect(() => {
    const fetch = async () => {
      dispatch(fetchData(sortItems));
    };
    fetch();
  }, [sortItems]);

  const items = laptops.map((obj, i) => {
    return (
      <CardItem
        key={i}
        title={`${obj.manufacturer} ${obj.model}`}
        oldPrice={obj.priceWithoutDiscount}
        newPrice={obj.price}
      />
    );
  })

  return (
    <div>
      <Header />
      <div className="container">
        <div className="home__wrapper">
          <NavBar className="navBar" />
          <div className="card-items">
            {!isLoading && items }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
