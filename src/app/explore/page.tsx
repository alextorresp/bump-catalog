import SearchBar from '@/components/ui/search-bar/SearchBar';
import Image from 'next/image';

export default function Explore() {

  return (
    <main className='container centered-column'>
      <Image src='/explore.png' alt='' width={500} height={150} className='mt-[80px]'/>
      <h2 className='mt-8 mb-8'>Search for your favorite albums, songs, or artists</h2>
      <SearchBar />
    </main>
  )
};