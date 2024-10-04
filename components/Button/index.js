import React from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';

export function ButtonImage({ link, image, text, bgColor }) {
  return (
    <div className='my-4'>
      <a href={link} className={`${bgColor} w-full py-3 rounded-md flex justify-center gap-x-2`} target='_blank'>
        <Image src={image} height={32} width={32} className='rounded-md' alt='logo' />
        <span className='my-auto'>{text}</span>
      </a>
    </div>
  );
}

export function ButtonIcon({ link, icon, text, bgColor, border }) {
  return (
    <div className='my-4'>
      <a
        href={link}
        className={`${bgColor} w-full py-3 rounded-md flex justify-center gap-x-2 ${border}`}
        target='_blank'
      >
        {/* <Icon icon={`skill-icons:${icon}`} className='text-2xl' /> */}
        <Icon icon={`${icon}`} className='text-2xl my-auto' />
        {text}
      </a>
    </div>
  );
}
