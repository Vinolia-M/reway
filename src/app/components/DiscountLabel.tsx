import React from 'react';
import Image from 'next/image';
import DiscoutLabelImage from '../assets/discountLabel.svg';

const DiscountLabel: React.FC = () => {
  return (
    <div className="absolute right-[37%] mt-[10px] z-10">
      <Image src={DiscoutLabelImage} width={80} height={30} alt='Label' />
    </div>
  );
}; 

export default DiscountLabel;
