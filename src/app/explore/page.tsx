import Image from 'next/image';
import SearchBar from '@/components/ui/search-bar/SearchBar';
import RowTrendingAlbums from '@/components/ui/explore-components/albums-trending/RowTrendingAlbums';
import RowTrendingArtists from '@/components/ui/explore-components/artists-trending/RowTrendingArtists';
import RowTrendingTracks from '@/components/ui/explore-components/tracks-trending/RowTrendingTracks';
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
        <RowTrendingTracks />
        <h3 className='font-bold mt-6 mb-2'>Trending Artists</h3>
        <RowTrendingArtists />
        <h3 className='font-bold mt-6 mb-2'>Trending Albums</h3>
        <RowTrendingAlbums />
      </div>
    </main>
  )
};