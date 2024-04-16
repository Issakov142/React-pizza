import React from 'react';

import './scss/app.scss';
import pizzas from './assets/pizzas.json';

import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaCard';

function App() {
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
            {pizzas.map((obj) => {
              return <PizzaBlock image={obj.imageUrl} title={obj.title} price={obj.price} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
