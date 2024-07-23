import Image from 'next/image';
import SearchBar from '@/components/ui/search-bar/SearchBar';
import AlbumChartRow from '@/components/ui/chart-components/AlbumChartRow';
import ArtistChartRow from '@/components/ui/chart-components/ArtistChartRow';
import TrackChartRow from '@/components/ui/chart-components/TrackChartRow';

export default function Explore() {

  return (
    <main className='container'>
      <div className='centered-column border border-black border-dashed rounded-2xl py-12 px-4'>
        <Image src='/explore.png' alt='' width={500} height={150} className=''/>
        <h2 className='mt-8 mb-5 text-center italic'>Search for your favorite albums, songs, or artists</h2>
        <SearchBar />
      </div>
      <div className='justify-start min-w-fit mt-8 overflow-hidden'>
        <h3 className='font-bold mb-2'>Trending Songs</h3>
        <TrackChartRow />
        <h3 className='font-bold mt-6 mb-2'>Trending Artists</h3>
        <ArtistChartRow />
        <h3 className='font-bold mt-6 mb-2'>Trending Albums</h3>
        <AlbumChartRow />
      </div>
    </main>
  )
};