import { CatelogItem } from '@/utils/types';
import Image from 'next/image';

export default function ReorderCard({ item }: { item: CatelogItem }) {

  return (
    <button className='flex flex-row gap-2 flex-grow'>
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