'use client';

import { useGlobalContext } from '@/context/GlobalContext';
import CatelogRow from '@/components/ui/catalog/CatelogRow';
import { useEffect, useState } from 'react';

export default function MyWall() {
  const { topArtists, topAlbums, topTracks } = useGlobalContext();
  
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <main className='container'>
      <h3 className='mb-5'>My Catelog</h3>
      <div className='flex flex-col gap-5'>
        <CatelogRow title='Top Tracks' type='track' data={topTracks}/>
        <CatelogRow title='Top Albums' type='albums' data={topAlbums}/>
        <CatelogRow title='Top Artists' type='artists' data={topArtists}/>
      </div>
    </main>
  )
};