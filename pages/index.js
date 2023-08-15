import Image from 'next/image';
import { ButtonIcon, ButtonImage } from '@/components/Button';

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
        <ButtonImage
          link={'https://mahdy-mubasyir.my.id/'}
          image={'/logo.png'}
          text={'Portfolio'}
          bgColor={'bg-blue-900'}
        />
        <ButtonIcon
          link={'https://www.linkedin.com/in/mahdy-mubasyir-699424210'}
          icon={'linkedin'}
          text={'LinkedIn'}
          bgColor={'bg-blue-600'}
        />
        <ButtonIcon
          link={'https://www.instagram.com/mubasyirmahdy'}
          icon={'instagram'}
          text={'Instagram'}
          bgColor={'bg-gradient-to-r from-yellow-500 via-red-500 to-purple-700'}
        />
        <ButtonIcon
          link={'https://github.com/mubasyir19'}
          icon={'github-dark'}
          text={'Github'}
          bgColor={'bg-black'}
          border={'border-2 border-white'}
        />
      </div>
      <footer className='mt-8 text-center text-white'>
        <p>Made with &#x2764;&#xfe0f; by Maher</p>
      </footer>
    </main>
  );
}
