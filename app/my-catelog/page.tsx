'use client';

import { useGlobalContext } from '@/context/GlobalContext';
import { useEffect, useState } from 'react';
import CatelogGrid from '@/components/ui/catalog/CatelogGrid';
import MyCatelogSkeleton from '@/components/ui/skeletons/MyCatelogSkeleton';

export default function MyCatelog() {
  const { topArtists, topAlbums, topTracks } = useGlobalContext();
  
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <main className='container'>
        <h3 className='mb-5'>My Catelog</h3>
        <div className='flex flex-col gap-5'>
          <MyCatelogSkeleton title='My Top Tracks' />
          <MyCatelogSkeleton title='My Top Albums' />
          <MyCatelogSkeleton title='My Top Artists' />
        </div>
    </main>
  };

  return (
    <main className='container'>
      <h3 className='mb-5'>My Catelog</h3>
      <div className='flex flex-col gap-5'>
        <CatelogGrid title='My Top Tracks' type='track' data={topTracks}/>
        <CatelogGrid title='My Top Albums' type='albums' data={topAlbums}/>
        <CatelogGrid title='My Top Artists' type='artists' data={topArtists}/>
      </div>
    </main>
  )
};