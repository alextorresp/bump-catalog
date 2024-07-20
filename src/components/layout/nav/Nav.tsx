import Link from 'next/link';
import Image from 'next/image';
import SearchBar from '@/components/ui/search-bar/SearchBar';

export default function Nav() {
  return (
    <header className='mb-5 pt-5 container '>
      <nav className='w-full flex flex-row items-center justify-between gap-6 rounded-xl border border-black py-[13px] px-5 h-14'>
        <Link href='/' className='me-auto'>
          <Image alt='' src='/bump-logo.png' width={100} height={100}></Image>
        </Link>

        <Link href='my-catalog' className='flex flex-row items-center rounded-xl px-2.5 border border-black h-full border-dashed'>
          <p className='whitespace-nowrap'>My Catalog</p>
        </Link>

        <Link href='explore' className='flex flex-row items-center rounded-xl px-2.5 border border-black h-full border-dashed'>
          <p className='whitespace-nowrap'>Explore</p>
        </Link>

        <SearchBar />
      </nav>
    </header>
  )
};