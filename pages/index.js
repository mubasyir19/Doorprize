import Image from 'next/image';
import { Inter } from 'next/font/google';
import { Icon } from '@iconify/react';

export default function Home() {
  return (
    <main
      className={`px-5 font-sans flex flex-col justify-center h-screen lg:w-1/2 lg:mx-auto bg-[url('/background.jpg')] bg-center bg-cover bg-no-repeat`}
    >
      <header className='text-center'>
        <Image src='/mahdy.png' height={160} width={160} className='rounded-full mx-auto' alt='photo' />
        <h1 className='mt-4 text-2xl text-white'>Mahdy Mubasyir</h1>
      </header>
      <div className='quotes text-center mt-8 text-white'>
        <i>
          Practice like you never won, <br />
          Play like you never lost.
        </i>
      </div>
      <div className='mt-12 text-white'>
        <div className='my-4'>
          <a
            href='https://mahdy-mubasyir.vercel.app/'
            className='bg-blue-900 w-full py-3 rounded-md flex justify-center gap-x-2'
            target='_blank'
          >
            <Image src='/logo.png' height={32} width={32} className='rounded-md' alt='logo' />
            <span className='my-auto'>Portfolio </span>
          </a>
        </div>
        <div className='my-4'>
          <a
            href='https://www.linkedin.com/in/mahdy-mubasyir-699424210'
            className='bg-blue-600 w-full py-3 rounded-md flex justify-center gap-x-2'
            target='_blank'
          >
            <Icon icon='skill-icons:linkedin' className='text-2xl' />
            LinkedIn
          </a>
        </div>
        <div className='my-4'>
          <a
            href='https://www.instagram.com/mubasyirmahdy'
            className='bg-gradient-to-r from-yellow-500 via-red-500 to-purple-700 w-full py-3 rounded-md flex justify-center gap-x-2'
            target='_blank'
          >
            <Icon icon='skill-icons:instagram' className='text-2xl' />
            Instagram
          </a>
        </div>
        <div className='my-4'>
          <a
            href='https://github.com/mubasyir19'
            className='bg-black w-full py-3 rounded-md flex justify-center gap-x-2 border-2 border-white'
            target='_blank'
          >
            <Icon icon='skill-icons:github-dark' className='text-2xl' />
            Github
          </a>
        </div>
      </div>
      <footer className='mt-8 text-center text-white'>
        <p>Made with &#x2764;&#xfe0f; by Maher</p>
      </footer>
    </main>
  );
}
