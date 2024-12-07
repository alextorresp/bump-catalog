'use client';

import { useGlobalContext } from '@/context/GlobalContext';

export default function MyWall() {
  const { topArtists, topAlbums, topTracks } = useGlobalContext();

  return (
    <main className='container'>
      <h1>My Wall</h1>

      <div className='flex flex-row items-between gap-12'>
        <div className='flex flex-col'>
          <p className='mb-2 font-bold'>TOP ARTISTS</p>
          <p className='mb-3'>Total: {topArtists.length}</p>
          {topArtists.map((artist, index) => {
            return <p key={`artist-${index}`}>{artist}</p>;
          })}
        </div>

        <div className='flex flex-col'>
          <p className='mb-2 font-bold'>TOP ALBUMS</p>
          <p className='mb-3'>Total: {topAlbums.length}</p>
          {topAlbums.map((album, index) => {
            return <p key={`album-${index}`}>{album}</p>;
          })}
        </div>

        <div className='flex flex-col'>
          <p className='mb-2 font-bold'>TOP TRACKS</p>
          <p className='mb-3'>Total: {topTracks.length}</p>
          {topTracks.map((track, index) => {
            return <p key={`track-${index}`}>{track}</p>;
          })}
        </div>
      </div>
    </main>
  )
};