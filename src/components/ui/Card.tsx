'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useGlobalContext } from '../../context/GlobalContext';
import { CatelogItem } from '@/utils/types';
import AddToListButton from './buttons/AddToListButton';

export default function Card({ id, imageSrc, type, title, artist_name, release_date, album_name, alt_text }: CatelogItem) {
  const { addToList, setAddingToList } = useGlobalContext();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isAdded, setIsAdded] = useState<boolean>(false);
  const [isImageLoading, setIsImageLoading] = useState<boolean>(true);

  let item: CatelogItem = {
    id: id,
    imageSrc: imageSrc,
    type: type,
    title: title,
    artist_name: artist_name,
    release_date: release_date,
    album_name: album_name,
    alt_text: alt_text
  };

  const handleAddClick = async () => {
    setIsLoading(true);
    setAddingToList(true);
    const added = addToList(type, item);
    setIsAdded(added);
    setAddingToList(false);
    setIsLoading(false);
  };

  return (
    <div className='w-full h-full p-3 text-white'>
      <div className='flex flex-col p-5 relative overflow-hidden rounded-xl h-full'>
        <Image
          src={imageSrc}
          alt={alt_text}
          className='top-0 left-0 -z-10 blur-lg'
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          onLoad={() => setIsImageLoading(false)}
        />

        <div className='absolute w-full h-full top-0 left-0 -z-10 bg-gradient-to-t from-40% from-black to-transparent'></div>
        <div className='absolute w-full h-3/4 rounded-t-xl top-[0] left-0 -z-10 border-t border-l border-r border-dashed border-black'></div>
        <div className='aspect-square relative'>
          <div className={`${isImageLoading ? 'opacity-1 animate-pulse' : 'opacity-0 animate-none' } w-full h-full absolute top-0 left-0 bg-gray-300 transition-all ease-out`}>
          </div>

          <Image
            src={imageSrc}
            alt={alt_text}
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            className={`${isImageLoading ? 'opacity-0' : 'opacity-1'} transition-all ease-in`}
            onLoad={() => setIsImageLoading(false)}
          />
        </div>
        <p className={`max-w-full font-semibold mt-6 card-title ${!artist_name && 'mb-5'}`}>{title}</p>
        { artist_name && (<p className='text-slate-200 mt-0.5 font-extralight mb-5'>{artist_name}</p>) }
        <div className='w-full mt-auto'>
          <AddToListButton onClick={handleAddClick} isAdded={isAdded} isLoading={isLoading}/>
        </div>
      </div>
    </div>
  )
};
