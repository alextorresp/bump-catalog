import SearchBar from '@/components/ui/search-bar/SearchBar';
import Image from 'next/image';

export default function Explore() {

  return (
    <main className='container'>
      <div className='centered-column border border-black border-dashed rounded-2xl py-12 px-4'>
        <Image src='/explore.png' alt='' width={500} height={150} className=''/>
        <h2 className='mt-8 mb-5 text-center italic'>Search for your favorite albums, songs, or artists</h2>
        <SearchBar />
      </div>
      <div className='flex flex-col justify-start w-full mt-10 '>
        <h3 className='font-bold'>Trending Albums</h3>
        <h3 className='font-bold'>Trending Songs</h3>
        <h3 className='font-bold'>Trending Artists</h3>
      </div>
    </main>
  )
};