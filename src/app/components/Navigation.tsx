import React from 'react';
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import LogoImage from '../assets/logo.svg';
import LoginSignupButton from './LoginSignupButton';

const Navigation = () => {

    return(
        <main className='mx-16'>
            <div className='flex justify-between'>
                <div className='flex gap-[50px]'>
                  <Image src={LogoImage} width={164} height={45} alt='Logo' />
                </div>
                <div className='flex gap-[50px]'>
                  <div>
                    
                  </div>
                  <LoginSignupButton />
                </div>
            </div>
        </main>
    );

};

export default Navigation;