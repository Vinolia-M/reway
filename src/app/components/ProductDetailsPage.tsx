'use client'

import React, {useEffect} from 'react';
import Breadcrumbs from './Breadcrums';
import ImageGallery from './ImageGallery';
import AddToCart from './AddToCart';
import ShoeGrid from './ShoeGrid';

const ProductDetailsPage: React.FC = () => {
    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'Boots', href: '/boots' },
        { label: 'Dylan Hiker Boots', href: '/boots/dylan-hiker-boots' },
      ];

     return(
        <div className='w-full'>
            <div className='banner flex justify-around items-center flex-wrap p-[20px]'>
                <h1 className='text-white text-30 leading-26'>SUMMER SALE!<br /><span className='text-20'>UP TO 50% OFF!</span></h1>
                <button className='text-white border-white border-[3px] rounded-md px-[35px] h-[45px]'>
                  SHOP NOW
                </button>    
            </div>
            <div>
            <Breadcrumbs items={breadcrumbItems} />
            <div className='flex justify-center gap-[50px] custom-wrap'>
              <ImageGallery />
              <AddToCart />
            </div>
            </div>
            <div className='flex gap-[10px] justify-center items-center mt-[40px]'>
              <p className='text-20 text-black'>MORE FROM <span className='text-Reway-blue'>BOOTS</span></p>
              <div className='h-[2px] w-[55%] bg-bgRewayGrey'></div>
            </div>
            <ShoeGrid />
        </div>
     );
};

export default ProductDetailsPage;