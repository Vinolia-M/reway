'use client'

import React, {useEffect} from 'react';
import Breadcrumbs from './Breadcrums';
import ImageGallery from './ImageGallery';
import AddToCart from './AddToCart';

const ProductDetailsPage: React.FC = () => {
    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'Boots', href: '/boots' },
        { label: 'Dylan Hiker Boots', href: '/boots/dylan-hiker-boots' },
      ];

     return(
        <div className='w-[74%]'>
            <div className='banner flex justify-around items-center flex-wrap p-[20px]'>
                <h1 className='text-white text-30 leading-26'>SUMMER SALE!<br /><span className='text-20'>UP TO 50% OFF!</span></h1>
                <button className='text-white border-white border-[3px] rounded-md px-[35px] h-[45px]'>
                  SHOP NOW
                </button>    
            </div>
            <div>
            <Breadcrumbs items={breadcrumbItems} />
            <div className='flex justify-center gap-[50px]'>
              <ImageGallery />
              <AddToCart />
            </div>
            </div>
        </div>
     );
};

export default ProductDetailsPage;