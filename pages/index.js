import Image from 'next/image';
import { ButtonIcon, ButtonImage } from '@/components/Button';

export default function Home() {
  return (
    <main className={`h-screen bg-jong bg-center bg-cover bg-no-repeat`}>
      <div className='h-full bg-black bg-opacity-50  flex flex-col justify-center'>
        <div className='px-5 font-sans lg:w-1/2 lg:mx-auto'>
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
              icon={'skill-icons:linkedin'}
              text={'LinkedIn'}
              bgColor={'bg-blue-600'}
            />
            <ButtonIcon
              link={'https://www.instagram.com/mubasyirmahdy'}
              icon={'skill-icons:instagram'}
              text={'Instagram'}
              bgColor={'bg-gradient-to-r from-yellow-500 via-red-500 to-purple-700'}
            />
            <ButtonIcon
              link={'https://github.com/mubasyir19'}
              icon={'skill-icons:github-dark'}
              text={'Github'}
              bgColor={'bg-black'}
              border={'border-2 border-white'}
            />
            <ButtonIcon
              link={'https://www.behance.net/mahdymubasyir'}
              icon={'simple-icons:behance'}
              text={'Behance'}
              bgColor={'bg-[#0047ad]'}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
