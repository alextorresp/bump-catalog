'use client';

import { useGlobalContext } from '@/context/GlobalContext';
import { useEffect, useState } from 'react';
import CatelogGrid from '@/components/ui/catalog/CatelogGrid';
import MyCatelogSkeleton from '@/components/ui/skeletons/MyCatelogSkeleton';
import Button from '@/components/ui/buttons/Button';

export default function MyCatelog() {
  const { topArtists, topAlbums, topTracks } = useGlobalContext();
  
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <main className='container'>
        <div className='flex justify-between'>
          <h3 className='mb-5'>My Catelog</h3>
          <Button variant={'outline'} size={'auto'}>Generate PDF!</Button>
        </div>
        <div className='flex flex-col gap-5'>
          <MyCatelogSkeleton title='My Top Tracks' />
          <MyCatelogSkeleton title='My Top Albums' />
          <MyCatelogSkeleton title='My Top Artists' />
        </div>
    </main>
  };

  return (
    <main className='container'>
      <div className='flex justify-between mb-5'>
          <h3>My Catelog</h3>
          <Button variant={'outline'} size={'auto'}>Generate PDF!</Button>
      </div>
      <div className='flex flex-col gap-5'>
        <CatelogGrid title='My Top Tracks' type='track' data={topTracks}/>
        <CatelogGrid title='My Top Albums' type='album' data={topAlbums}/>
        <CatelogGrid title='My Top Artists' type='artist' data={topArtists}/>
      </div>
    </main>
  )
};