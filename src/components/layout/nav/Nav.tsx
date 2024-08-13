import Link from 'next/link';
import Image from 'next/image';

export default function Nav() {
  return (
    <header className='mb-7 pt-5 container '>
      <nav className='w-full flex flex-row items-center justify-between gap-5 rounded-xl border-black py-[13px] h-14'>
        <Link href='/' className='me-auto'>
          <Image alt='' src='/bump-logo.png' width={100} height={100}></Image>
        </Link>

        <Link href='/explore' className='flex flex-row items-center rounded-xl px-2.5 border border-black h-full border-dashed'>
          <p className='whitespace-nowrap'>Explore</p>
        </Link>

        <Link href='/my-wall' className='flex flex-row items-center rounded-xl px-2.5 border border-black h-full border-dashed'>
          <p className='whitespace-nowrap'>My Wall</p>
        </Link>
      </nav>
    </header>
  )
};