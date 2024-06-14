'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const Header = ({
  firstName,
  lastName,
  isTopOfPage
}: {
  firstName: string,
  lastName: string,
  isTopOfPage: boolean,
}) => {
  const [ classForLogo, setClassForLogo ] = useState('self-center');

  const vibrate = () => {
    setClassForLogo('self-center animate-spin');
    setTimeout(() => {
      setClassForLogo('self-center');
    }, 1000);
  }



  return(
    <div className={isTopOfPage ? "m-auto max-w-6xl p-4 flex justify-between bg-orange-200 sticky top-0" : 'm-auto max-w-6xl p-4 flex justify-between bg-orange-200 sticky top-0 border-b-2 border-red-400 opacity-90'}>
      <div className='flex space-x-4'>
        <Image
          alt='logo'
          src='./exit-exit-svgrepo-com.svg'
          width={40}
          height={40}
          className={classForLogo}
          onClick={vibrate}
        />
        <p className='text-3xl text-emerald-600 self-center hover:cursor-pointer'>Project <span className='text-4xl font-bold'>Exit</span></p>
      </div>
      {(firstName || lastName) && (
        <p className='text-black self-center'>Увольняется: {firstName} {lastName}</p>
      )}
      <p className='text-xl font-bold text-emerald-600 self-center hover:cursor-pointer'>History</p>
    </div>
  )
}

export default Header;