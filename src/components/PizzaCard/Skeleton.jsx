import React from 'react';
import ContentLoader from 'react-content-loader';

const PizzaSkeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <circle cx="134" cy="124" r="124" />
    <rect x="0" y="260" rx="10" ry="10" width="280" height="27" />
    <rect x="0" y="310" rx="10" ry="10" width="280" height="88" />
    <rect x="0" y="430" rx="10" ry="10" width="90" height="27" />
    <rect x="128" y="420" rx="20" ry="20" width="152" height="45" />
  </ContentLoader>
);

export default PizzaSkeleton;
