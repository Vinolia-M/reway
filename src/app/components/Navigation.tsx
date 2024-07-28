import React from 'react';
import Image from "next/image";
import LogoImage from '../assets/logo.svg';
import LoginSignupButton from './LoginSignupButton';
import NavMenu from './NavMenu';
import GiftBoxImage from '../assets/gift-box.svg';
import StarImage from '../assets/star.svg';
import HeartImage from '../assets/heart.svg';
import TagImage from '../assets/tag.svg';

const Navigation = () => {

    return(
        <main className='mx-16'>
            <div className='flex flex-wrap justify-between'>
                <div className='flex items-center gap-[50px]'>
                  <Image src={LogoImage} width={164} height={45} alt='Logo' />
                  <NavMenu />
                </div>
                <div className='flex gap-[100px]'>
                  <div className='flex items-center gap-[20px]'>
                   <Image src={GiftBoxImage} width={26} height={26} alt='Gft Box' />
                   <Image src={StarImage} width={26} height={26} alt='Star' />
                   <Image src={HeartImage} width={26} height={26} alt='Heart' />
                   <Image src={TagImage} width={26} height={26} alt='Tag' />
                  </div>
                  <LoginSignupButton />
                </div>
            </div>
        </main>
    );

};

export default Navigation;