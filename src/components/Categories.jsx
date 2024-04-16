import React from 'react';

function Categories() {
  const [catIndex, setCatIndex] = React.useState(0);
  function catHandler(defIndex) {
    setCatIndex(defIndex);
  }
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {categories.map((value, i) => {
          return (
            <li key={i} onClick={() => catHandler(i)} className={catIndex === i ? 'active' : ''}>
              {value}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Categories;
