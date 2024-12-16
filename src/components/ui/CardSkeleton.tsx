import { CatelogItem } from '@/utils/types';
import Image from 'next/image';

export default function CardSkeleton({ id, imageSrc, type, title, artist_name, release_date, album_name, alt_text }: CatelogItem) {
  return (
    <div className='w-full h-full p-3 animate-pulse text-slate-100'>
      <div className='flex flex-col p-5 relative overflow-hidden rounded-xl h-full bg-slate-100'>
        <div className='aspect-square relative'>
          <Image
            src={imageSrc}
            alt={alt_text}
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            className='opacity-0'
          />
        </div>
        <p className={`max-w-full text-slate-100 font-semibold mt-6 card-title ${!artist_name && 'mb-5'}`}>{title}</p>
        { artist_name && (<p className='text-slate-100 mt-0.5 font-extralight mb-5'>{artist_name}</p>) }
        <div className='w-full mt-auto'>
          <p>Loading...</p>
        </div>
      </div>
    </div>
  )
};