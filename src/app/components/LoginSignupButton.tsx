'use client'

import React, { useState } from 'react';
import { useRouter } from "next/navigation";

const LoginSignupButton: React.FC = () => {
  const router = useRouter();
  const [activeButton, setActiveButton] = useState<string>('/login');
  const [showPopup, setShowPopup] = useState<string | null>(null);

  const handleNavigationClick = (event: React.MouseEvent<HTMLButtonElement>, path: string) => {
    event.preventDefault();
    setActiveButton(path);
    setShowPopup(path);
  };

  const closePopup = () => {
    setShowPopup(null);
  };

  return (
    <div>
      <div className='flex gap-[30px] align-center py-[20px] text-Reway-blue text-17'>
        <button
          id='signUpButton'
          className={`${activeButton === '/' ? 'login-signup' : ''}`}
          onClick={(event) => handleNavigationClick(event, '/')}
        >
          SIGN UP
        </button>
        <button
          id='loginButton'
          className={`${activeButton === '/login' ? 'login-signup' : ''}`}
          onClick={(event) => handleNavigationClick(event, '/login')}
        >
          LOGIN
        </button>
      </div>

      {showPopup && (
        <div className="bg-overlayBg fixed top-0 left-0 w-full h-screen flex justify-center items-center z-10">
          <div className="popup-content relative p-[20px] bg-white">
            <button onClick={closePopup} className="absolute top-[10px] right-[10px] text-16 cursor-pointer">Close</button>
            {showPopup === '/' ? (
              <div>
                <h2>Sign Up</h2>
                {/* Sign Up form goes here */}
              </div>
            ) : (
              <div>
                <h2>Login</h2>
                {/* Login form goes here */}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginSignupButton;
