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
        <div className="popup-overlay">
          <div className="popup-content">
            <button onClick={closePopup} className="popup-close">Close</button>
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
