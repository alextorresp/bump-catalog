import { CatelogItem } from '@/utils/types';
import Image from 'next/image';

type Props = {
  position: number;
  itemData: CatelogItem
};

export default function CatelogCard({ position, itemData }: Props) {
  const { title, artist_name, id, type, imageSrc, release_date, album_name } = itemData;

  return (
    <div className='relative flex flex-col md:bg-slate-100 lg:p-4 md:p-2 p-2 md:text-black rounded-sm'>
      <div className='absolute -top-3 -left-3 bg-black border-[1px] md:border-2 border-gray-300 shadow-2xl p-2 rounded-full aspect-ratio w-9 h-9 m:w-10 m:h-10 lg:w-11 lg:h-11 z-10 flex items-center justify-center'>
        <p className='lg:text-3xl md:text-xl text-lg font-bold text-gray-200'>{position}</p>
      </div>

      <div className='aspect-square relative'>
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
      </div>
      <p className='mt-3 font-bold md:text-lg md:leading-[22px] leading-[15px]'>{title}</p>
      { artist_name && <p className='mt-1'>{artist_name}</p> }
      { release_date && <p className='mt-1'><em>{release_date.toString()}</em><br></br></p> }    
      { album_name && <p>Album: {album_name}</p> } 
    </div>
  )
};