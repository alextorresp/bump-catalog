import Image from 'next/image';
import SearchBar from '@/components/ui/search-bar/SearchBar';
import RowTrendingItems from '@/components/ui/trending-items/RowTrendingItems';
export default function Explore() {

  return (
    <main className='container'>
      <div className='w-full flex flex-col justify-center screen-minus-nav-height'>
        {/* <Image src='/explore.png' alt='' width={500} height={150} className=''/> */}
        <h1 className='font-extrabold leading-[140px] tracking-[3px] mb-14 -mt-12'>EXPLORE <span className='block'>MUSIC</span></h1>
        <h2 className='mt-[40px] mb-3 font-light'>Search for your favorite albums, songs, or artists</h2>
        <SearchBar />
      </div>
      <div className='justify-start w-full overflow-visible'>
        <h3 className='font-bold mb-4'>Trending Songs</h3>
        <RowTrendingItems chartType='tracks' />
        <h3 className='font-bold mt-14 mb-4'>Trending Artists</h3>
        <RowTrendingItems chartType='artists' />
        <h3 className='font-bold mt-14 mb-4'>Trending Albums</h3>
        <RowTrendingItems chartType='albums' />
      </div>
    </main>
  )
};