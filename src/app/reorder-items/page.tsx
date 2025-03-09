'use client';

import { useSearchParams } from 'next/navigation';
import { useGlobalContext } from '@/context/GlobalContext';
import { CatelogItem } from '@/utils/types';
import { notFound } from 'next/navigation'

export default function ReorderItems() {
  const searchParams = useSearchParams();
  const type = searchParams.get('type') || 'Items';
  const { updateList, topAlbums, topArtists, topTracks } = useGlobalContext();

  let list: CatelogItem[];

  // Filter what type the item is and what list it belong to
  if (type === 'artist') {
    list = topArtists;
  } else if (type === 'album') {
    list = topAlbums;
  } else if (type === 'track') {
    list = topTracks;
  } else {
    return notFound();
  }

  // need to retrieve the correct list
  // modify the list 
  // update the list

  return (
    <section className='container z-20 bg-red-100 min-h-screen'>
      <h3 className='mb-5'>Reorder your top {type}s</h3>
      {list && list.map((item) => {
        return (<p key={item.id}>{item.title}</p>)
      })}
    </section>
  )
};