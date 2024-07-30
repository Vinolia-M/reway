'use client'

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const SubNav: React.FC = () => {
    const router = useRouter(),
          [showPopup, setShowPopup] = useState<string | null>(null);

    const handleNavigationClick = (event: React.MouseEvent<HTMLButtonElement>, path: string) => {
          event.preventDefault();
          setShowPopup(path);
    };

    const closePopup = () => {
          setShowPopup(null);
    };

    return (
        <div>
            <div className="bg-bgRewayGrey py-[20px] px-[12px]">
             <main className='flex flex-wrap justify-between items-center mx-16'>
              <p className="text-Reway-darkgrey text-17 pl-20">Adventure is just around the corner!</p>
              <div className="flex items-center gap-[50px]">
              <button
                id='loginButton'
                className='login-signup text-Reway-blue'
                onClick={(event) => handleNavigationClick(event, '/')}>
                FIND A STORE
              </button>
               <p className="text-Reway-darkgrey text-17">Not in South Africa?</p>
              </div>
             </main>
            </div>

            {showPopup && (
             <div className="bg-overlayBg fixed top-0 left-0 w-full h-screen flex justify-center items-center z-10">
              <div className="popup-content relative p-[20px] bg-white">
               <button onClick={closePopup} className="absolute top-[10px] right-[10px] text-16 cursor-pointer">Close</button>
               {showPopup === '/' ? (
                <div>
                 <h2>FIND A STORE</h2>
                 {/* Sign Up form goes here */}
                </div>
                ) : null}
             </div>
            </div>
)}

        </div>
    );
};

export default SubNav;