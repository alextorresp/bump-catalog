import SearchBar from '@/components/ui/search-bar/SearchBar';
import RowTrendingItems from '@/components/ui/trending-items/RowTrendingItems';

export default function Explore() {
  return (
    <main className='container'>
      <div className='w-full flex flex-col justify-center screen-minus-nav-height'>
        <h1 className='explore-heading font-bold tracking-[3px] -mt-12'>EXPLORE<br></br>MUSIC</h1>
        <h2 className='mt-6 mb-3 font-light'>Search for your favorite albums, songs, or artists...</h2>
        <SearchBar />
      </div>
      <div className='w-full flex flex-col gap-5 overflow-visible'>
        <div>
          <h3 className='font-bold mb-2'>Trending Songs</h3>
          <RowTrendingItems chartType='tracks' />
        </div>

        <div>
          <h3 className='font-bold mb-2'>Trending Artists</h3>
          <RowTrendingItems chartType='artists' />
        </div>

        <div>
          <h3 className='font-bold mt-14 mb-2'>Trending Albums</h3>
          <RowTrendingItems chartType='albums' />
        </div>
      </div>
    </main>
  )
};