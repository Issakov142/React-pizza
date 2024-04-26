import React from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaCard';
import PizzaSkeleton from '../components/PizzaCard/Skeleton';

const Home = () => {
  const [pizzas, setPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [catIndex, setCatIndex] = React.useState(0);
  const [compId, setCompId] = React.useState({ name: 'популярности', sortProperty: 'rating' });
  console.log(catIndex, compId);

  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://661ed28b16358961cd92e725.mockapi.io/pizzas${
        catIndex > 0 ? `?category=${catIndex}` : `?`
      }&sortBy=${compId.sortProperty.replace('+', '')}&order=${
        compId.sortProperty.includes('+') ? 'asc' : 'desc'
      }`,
    )
      .then((res) => res.json())
      .then((data) => {
        setPizzas(data);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [catIndex, compId]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={catIndex} setCatIndex={(id) => setCatIndex(id)} />
        <Sort value={compId} setCompId={(id) => setCompId(id)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <PizzaSkeleton key={index} />)
          : pizzas.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
};
export default Home;
