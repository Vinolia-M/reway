'use client'

import React, {useEffect, useState} from 'react';
import { useRouter } from "next/navigation";

const LoginSignupButton = () => {
  const router = useRouter(),
        [activeButton, setActiveButton] = useState<string | null>(null),
        handleNavigationClick = (event: React.MouseEvent<HTMLButtonElement>, path: string) => {
        setActiveButton(path);
        event.preventDefault();
        router.push(path);
      };

      useEffect(() => {
        const signUpButton = document.getElementById('signUpButton');
        const loginButton = document.getElementById('loginButton');
    
        if (signUpButton) {
          signUpButton.classList.toggle('active', activeButton === '/');
        }
        if (loginButton) {
          loginButton.classList.toggle('active', activeButton === '/login');
        }
      }, [activeButton]);

    return(
        <div>
            <div className='flex gap-[30px] align-center py-[20px] text-Reway-blue'>
             <button id='signUpButton' className='login-signup' onClick={(event) => handleNavigationClick(event, '/')}>
                SIGN UP
             </button>
             <button id='loginButton' className='login-signup active' onClick={(event) => handleNavigationClick(event, '/login')}>
                LOGIN
             </button>
            </div>
        </div>
    );

};

export default LoginSignupButton;