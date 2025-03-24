'use client';

import { useSearchParams } from 'next/navigation';
import { useGlobalContext } from '@/context/GlobalContext';
import { CatelogItem } from '@/utils/types';
import { notFound } from 'next/navigation';
import ReorderCard from '@/components/ui/reorder-items/ReorderCard';

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
    <section className='container z-20  min-h-screen'>
      <div className='w-full sm:w-[80%] lg:w-[650px] mx-auto'>
        <h3 className='mb-2 text-center'>Reorder your top {type}s</h3>
        <div className='rounded-md border border-stone-500 shadow-lg px-4 py-4 flex flex-col gap-3'>
          {list && list.map((item) => {
            return (<ReorderCard item={item}></ReorderCard>)
          })}
        </div>
      </div>
    </section>
  )
};