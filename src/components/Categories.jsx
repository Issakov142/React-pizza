import React from 'react';

function Categories({ setCatIndex, value }) {
  function catHandler(defIndex) {
    setCatIndex(defIndex);
  }
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {categories.map((category, i) => {
          return (
            <li key={i} onClick={() => catHandler(i)} className={value === i ? 'active' : ''}>
              {category}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Categories;
