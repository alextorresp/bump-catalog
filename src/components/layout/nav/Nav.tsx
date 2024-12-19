import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/buttons/Button';

export default function Nav() {
  return (
    <header className='mb-7 pt-5 container'>
      <nav className='w-full flex flex-row items-center justify-between gap-5 rounded-xl border-black py-[13px] h-14 border px-4'>
        <Link href='/' className='me-auto'>
          <Image alt='' src='/bump-logo.png' width={100} height={100} sizes='30vw' priority={false}></Image>
        </Link>

        <Link href='/explore'>
          <Button size={'auto'} className='py-[1px]'>Explore</Button>
        </Link>

        <Link href='/my-catelog'>
          <Button size={'auto'} className='py-[1px]'>My Catelog</Button>
        </Link>
      </nav>
    </header>
  )
};