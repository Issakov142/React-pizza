import React from 'react';

function Categories() {
  const [catIndex, setCatIndex] = React.useState(0);
  function catHandler(defIndex) {
    setCatIndex(defIndex);
  }

  return (
    <div className="categories">
      <ul>
        <li onClick={() => catHandler(1)} className={catIndex === 1 ? 'active' : ''}>
          Все
        </li>
        <li onClick={() => catHandler(2)} className={catIndex === 2 ? 'active' : ''}>
          Мясные
        </li>
        <li onClick={() => catHandler(3)} className={catIndex === 3 ? 'active' : ''}>
          Вегетарианская
        </li>
        <li onClick={() => catHandler(4)} className={catIndex === 4 ? 'active' : ''}>
          Гриль
        </li>
        <li onClick={() => catHandler(5)} className={catIndex === 5 ? 'active' : ''}>
          Острые
        </li>
        <li onClick={() => catHandler(6)} className={catIndex === 6 ? 'active' : ''}>
          Закрытые
        </li>
      </ul>
    </div>
  );
}
export default Categories;
