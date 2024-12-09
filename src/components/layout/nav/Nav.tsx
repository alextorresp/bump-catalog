import Link from 'next/link';
import Image from 'next/image';

export default function Nav() {
  return (
    <header className='mb-7 pt-5 container'>
      <nav className='w-full flex flex-row items-center justify-between gap-5 rounded-xl border-black py-[13px] h-14 border px-4'>
        <Link href='/' className='me-auto'>
          <Image alt='' src='/bump-logo.png' width={100} height={100} sizes='30vw' priority={false}></Image>
        </Link>

        <Link href='/explore' className='flex flex-row items-center rounded-xl px-2.5 border border-black h-full border-dashed hover:bg-black hover:text-white transition-all ease-in'>
          <p className='whitespace-nowrap'>Explore</p>
        </Link>

        <Link href='/my-catelog' className='flex flex-row items-center rounded-xl px-2.5 border border-black h-full border-dashed hover:bg-black hover:text-white transition-all ease-in'>
          <p className='whitespace-nowrap'>My Catelog</p>
        </Link>
      </nav>
    </header>
  )
};