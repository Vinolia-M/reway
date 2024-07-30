import React from 'react';

interface ShoeCardProps {
  name: string;
  brand: string;
  price: number;
  discount?: number;
  lowStock?: boolean;
  image: string;
}

const ShoeCard: React.FC<ShoeCardProps> = ({ name, brand, price, discount, lowStock, image }) => {
  return (
    <div className="relative p-[10px] w-[337px]">
      {discount && 
      <div className="discount-badge absolute top-[16px] right-[16px] text-12 text-white bg-bgRewayBlue">
        -{discount}% Off
      </div>}
      <img src={image} alt={name} className="w-full h-auto" />
      {lowStock && 
      <div className="low-stock-badge absolute text-16 text-white font-sans bottom-[123px] left-[20px]">
        Low Stock
      </div>}
      <div className="shoe-details relative mt-[10px]">
        <h3>{name}</h3>
        <p className='text-16 text-Reway-darkgrey font-sans ml-[25px!important]'>{brand}</p>
        <div className='flex justify-between items-center'>
         <p className='text-Reway-blue text-16 font-semibold'>R {price}</p>
         <a className='text-16 text-Reway-darkgrey font-sans'>View →</a>
        </div>
      </div>
    </div>
  );
};

export default ShoeCard;
