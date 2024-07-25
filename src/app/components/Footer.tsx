'use client'

import React from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const router = useRouter(),
    handleNavigationClick = (event: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    event.preventDefault();
    router.push(path);
  };

  return (
    <div>
      <div className="text-16 pt-10 pb-16 bg-bgRewayBlack leading-12">
        <div className="flex flex-wrap justify-between w-[70%] mx-auto">
         <div className="flex flex-wrap gap-[100px] pr-[100px] custom-gap">
         <div className="grid text-ReqayWhite cursor-pointer">
            <h3 className="text-white text-20">Account</h3>
            <a onClick={(event) => handleNavigationClick(event, '/')}>Account details</a>
            <a onClick={(event) => handleNavigationClick(event, '/')}>Orders</a>
            <a onClick={(event) => handleNavigationClick(event, '/')}>Returns and Exchanges</a>
         </div>
         <div className="grid text-ReqayWhite cursor-pointer">
            <h3 className="text-white text-20">The Company</h3>
            <a onClick={(event) => handleNavigationClick(event, '/')}>About us</a>
            <a onClick={(event) => handleNavigationClick(event, '/')}>Careers</a>
            <a onClick={(event) => handleNavigationClick(event, '/')}>Contact</a>
         </div>
         </div>
         <div className="custom-mt">
            <h3 className="text-white text-20">Follow us!</h3>
            <div className="flex gap-[25px] mt-5 cursor-pointer">
              <a onClick={(event) => handleNavigationClick(event, '/')}>
                <FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: '#fff' }} />
              </a>
              <a onClick={(event) => handleNavigationClick(event, '/')}>
                <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: '#fff' }} />
              </a>
            </div>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
