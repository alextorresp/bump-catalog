import { CatelogItem } from '@/utils/types';
import Image from 'next/image';

export default function ReorderCard({ item, index }: { item: CatelogItem, index: number }) {

  return (
    <button className='flex flex-row gap-2 flex-grow rounded-sm bg-slate-50 overflow-hidden px-4 py-3 items-center'>
      <p className='reorder-number lg:text-3xl md:text-xl text-sm font-bold text-black lg:w-[10%] md:w-[7.5%] w-[10%] flex flex-col items-center pr-2'>{index + 1}</p>
      <div className='lg:w-[15%] sm:w-[20%] w-[25%]'>
        <div className='aspect-square relative'>
          <Image
            src={item.imageSrc}
            alt={item.title}
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
        </div>
      </div>
      <div className='flex flex-col text-left p-2'>
        <p className='font-bold'>{item.title}</p>
        <p>{item.album_name}</p>
        <p>{item.artist_name}</p>
      </div>
    </button>
  )
};