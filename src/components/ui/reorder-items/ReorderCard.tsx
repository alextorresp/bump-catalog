import { CatelogItem } from '@/utils/types';
import Image from 'next/image';

export default function ReorderCard({ item }: { item: CatelogItem }) {

  return (
    <button className='flex flex-row gap-3 rounded-lg bg-slate-100 border border-black overflow-hidden'>
      <div className='w-[15%]'>
        <div className='aspect-square relative'>
          <Image
            src={item.imageSrc}
            alt={item.title}
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
        </div>
      </div>
      <div className='flex flex-col'>
        <p>{item.title}</p>
        <p>{item.album_name}</p>
        <p>{item.artist_name}</p>
      </div>
    </button>
  )
};