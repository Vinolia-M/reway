'use client'

import React, {useEffect} from 'react';
import SearchFilter from './SearchFilter';
import ProductDetailsPage from './ProductDetailsPage';

const BodyContents: React.FC = () => {

     return(

        <div>
            <div className='flex gap-[50px]'>
             <SearchFilter />
             <ProductDetailsPage />
            </div>
        </div>
     );
};

export default BodyContents;