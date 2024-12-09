'use client';

import { useGlobalContext } from '@/context/GlobalContext';
import { useEffect, useState } from 'react';
import CatelogGrid from '@/components/ui/catalog/CatelogGrid';

export default function MyWall() {
  const { topArtists, topAlbums, topTracks } = useGlobalContext();
  
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  };

  return (
    <main className='container'>
      <h3 className='mb-5'>My Catelog</h3>
      <div className='flex flex-col gap-5'>
        <CatelogGrid title='Top Tracks' type='track' data={topTracks}/>
        <CatelogGrid title='Top Albums' type='albums' data={topAlbums}/>
        <CatelogGrid title='Top Artists' type='artists' data={topArtists}/>
      </div>
    </main>
  )
};