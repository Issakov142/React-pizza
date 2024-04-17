import React from 'react';

import './scss/app.scss';

import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaCard';
import PizzaSkeleton from './components/PizzaCard/Skeleton';

function App() {
  const [pizzas, setPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    fetch('https://661ed28b16358961cd92e725.mockapi.io/pizzas')
      .then((res) => res.json())
      .then((data) => {
        setPizzas(data);
        setIsLoading(false);
      });
  }, []);
  console.log(pizzas);

  return (
    <div className="wrapper">
      <Header />

      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {isLoading
              ? [...Array(6)].map((_, index) => <PizzaSkeleton key={index} />)
              : pizzas.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
