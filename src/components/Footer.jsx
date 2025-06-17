import React from 'react';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-slate-800 text-white w-full py-4'>
      <div className='flex flex-col items-center justify-center'>
        <div className="logo font-bold text-white text-2xl">
          <span className='text-green-500'> &lt;</span>
          Pass
          <span className='text-green-500'>Vault/&gt;</span>
        </div>
        <div className='flex items-center gap-1'>
          Created by Kanishk
        </div>
      </div>
    </footer>
  );
};

export default Footer;
