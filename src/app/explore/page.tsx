import Image from 'next/image';
import SearchBar from '@/components/ui/search-bar/SearchBar';
import RowTrendingItems from '@/components/ui/trending-items/RowTrendingItems';
export default function Explore() {

  return (
    <main className='container'>
      <div className='centered-column border border-black border-dashed rounded-2xl py-12 px-4'>
        <Image src='/explore.png' alt='' width={500} height={150} className=''/>
        <h2 className='mt-8 mb-5 text-center italic'>Search for your favorite albums, songs, or artists</h2>
        <SearchBar />
      </div>
      <div className='justify-start w-full mt-8 overflow-visible'>
        <h3 className='font-bold mb-4'>Trending Songs</h3>
        <RowTrendingItems chartType='tracks' />
        <h3 className='font-bold mt-10 mb-4'>Trending Artists</h3>
        <RowTrendingItems chartType='artists' />
        <h3 className='font-bold mt-10 mb-4  '>Trending Albums</h3>
        <RowTrendingItems chartType='albums' />
      </div>
    </main>
  )
};