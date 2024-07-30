import Image from 'next/image';
import MailImage from '../assets/mail.svg';
import React, { useState } from 'react';

const MailingList: React.FC = () => {
  const [email, setEmail] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex items-center justify-center">
      <div className="bg-bgRewayBlue p-[22px] max-w-[60rem] w-full mx-auto ml-[18px] relative">
       <button className="absolute top-0 right-4 text-white text-[35px]">&times;</button>
        <div className="flex justify-center mb-4">
          <Image src={MailImage} width={40} height={34} alt='Mail' />
        </div>
        <h2 className="text-white text-20 mb-4">SIGN UP TO OUR MAILING LIST!</h2>
        <p className='text-white text-14 mb-2 font-sans pl-4 font-semibold'>Email</p>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input
            type="email"
            placeholder="ENTER EMAIL ADDRESS"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 mb-4 w-full rounded-[2px] font-sans font-semibold text-14"
            required/>
          <button type="submit"
            className="bg-white text-Reway-blue px-[35px] py-[10px] text-20">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default MailingList;
