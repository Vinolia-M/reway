import React, {useState} from 'react';
import styles from "./SearchFilter.module.css";
import Image from 'next/image';
import CartImage from '../assets/cart.svg';
import DiscoutLabelImage from '../assets/discountLabel.svg';

const DiscountLabel: React.FC = () => {
    const [selectedQuantity, setselectedQuantity] = useState<string>("");
    const [selectedSize, setselectedSize] = useState<string>("");
    const handleSearch = () => {
        console.log({ selectedQuantity, selectedSize });
      };
  return (

    <div className="w-[30%]">
      <div className="price w-full border-[5px] border-Reway-blue p-[20px]">
        <h4 className='text-20 text-black'>DYLAN HIKER BOOT</h4>
        <p className='store text-12 font-sans text-Reway-darkgrey ml-[20px]'>SUPERBALIST</p>
        <div className='flex gap-[30px] text-16 font-sans mt-4 ml-[20px]'>
          <div className='text-Reway-darkgrey'>
           <p>Fabication</p>
           <p>Color</p>
           <p>Brand</p>
          </div>
          <div className='brown-circ text-black font-semibold'>
           <p>Faux Leather</p>
           <p className='ml-[22px]'>Brown</p>
           <p>Superbalist</p>
          </div>
        </div>
        <div className='h-[1px] w-full bg-bgRewayGrey mt-[20px] mb-[20px]'></div>
        <p className='text-12 font-sans text-Reway-darkgrey ml-[20px]'>PRODUCT DETAILS</p>
        <ul className='text-16 font-sans list-disc ml-[40px] mb-[30px] mt-2'>
            <li>Hiking boot</li>
            <li>Speed laces</li>
            <li>Lace-up design</li>
            <li>Rubber sole</li>
        </ul>
        <div className="flex justify-center">
         <Image src={DiscoutLabelImage} width={80} height={30} alt='Label' />
        </div>
      </div>
      <div className={`${styles.filterItem} bg-bgRewayGrey p-[25px!important] font-semibold`}>
        <label className={styles.label}>SIZE</label>
          <select
              className={`${styles.select} bg-[white!important] mt-2`}
              value={selectedSize}
              onChange={(e) => setselectedSize(e.target.value)}>
              <option value="">SELECT SIZE</option>
              <option value="Red">Size 4</option>
              <option value="Blue">Size 5</option>
              <option value="Green">Size 8</option>
          </select>
          <label className={`${styles.label} mt-6`}>QUANTITY</label>
          <select
              className={`${styles.select} bg-[white!important] mt-2`}
              value={selectedQuantity}
              onChange={(e) => setselectedQuantity(e.target.value)}>
              <option value="">SELECT QUANTITY</option>
              <option value="Red">1</option>
              <option value="Blue">2</option>
              <option value="Green">3</option>
          </select>
          <button className={`${styles.searchButton} 
           flex justify-center gap-[15px] items-center text-20 w-[70%!important] mx-[auto!important] mt-[40px!important]`} 
           onClick={handleSearch}>
          <Image src={CartImage} width={30} height={30} alt='Cart'/> ADD TO CART
        </button>
       </div>
    </div>
   
    
  );
};

export default DiscountLabel;
