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
      <div className='rounded-md border border-stone-500 shadow-lg p-5 flex flex-col gap-4 bg-black w-full sm:w-[80%] lg:w-[650px] mx-auto'>
        <h3 className='mb-1 text-center text-white border border-white border-dashed rounded-md px-2 py-6'>Reorder your top {type}s</h3>
        {list && list.map((item, index) => {
          return (
          <div className='flex flex-row rounded-sm bg-slate-50 overflow-hidden px-4 py-3 items-center gap-4'>
            <p className='reorder-number lg:text-3xl md:text-xl text-lg font-bold text-black'>{index + 1}</p>
            <ReorderCard item={item}></ReorderCard>
          </div>
        )
        })}
      </div>
    </section>
  )
};