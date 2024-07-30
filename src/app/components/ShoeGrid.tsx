import React from 'react';
import ShoeCardGrid from './ShoeCardGrid';

const shoeData = [
  { name: 'HARGRAVE ANKLE BOOT', brand: 'Superbalist', price: 500, discount: 40, image: '/assets/Boots-05.png' },
  { name: 'CAMERON LEATHER', brand: 'Superbalist', price: 539, lowStock: true, image: '/assets/Boots-03.png' },
  { name: 'GRAYSON BROGUE', brand: 'Superbalist', price: 420, discount: 40, lowStock: true, image: '/assets/Boots-01.png' },
  { name: 'ORCA', brand: 'Jack and Jones', price: 500, discount: 40, lowStock: true, image: '/assets/Boots-04.png' },
  { name: 'JEAN HIKER BOOTS', brand: 'Superbalist', price: 600, image: '/assets/Boots-02.png' }
];

const ShoeGrid: React.FC = () => {
  return (
    <div className="shoe-grid flex flex-wrap gap-[20px]">
      {shoeData.map((shoe, index) => (
        <ShoeCardGrid key={index} {...shoe} />
      ))}
    </div>
  );
};

export default ShoeGrid;
