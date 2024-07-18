import Link from 'next/link';
import Image from 'next/image';
import ExploreIcon from '@/components/icons/explore-icon';
import CatalogIcon from '@/components/icons/catalog-icon';

export default function Nav() {
  return (
    <header className='mb-5 pt-5'>
      <nav className='container w-full flex flex-row items-center justify-between gap-6'>
        <Link href='/' className='me-auto'>
          <Image alt='' src='/bump-logo.png' width={100} height={100}></Image>
        </Link>

        <Link href='my-catalog' className='flex flex-row items-center px-5 py-[3px] rounded-full border border-black'>
          <CatalogIcon />
          <p className='whitespace-nowrap ml-2'>My Catalog</p>
        </Link>

        <Link href='explore' className='flex flex-row items-center px-5 py-[3px] rounded-full border border-black'>
          <ExploreIcon />
          <p className='whitespace-nowrap ml-2'>Explore</p>
        </Link>
      </nav>
    </header>
  )
};