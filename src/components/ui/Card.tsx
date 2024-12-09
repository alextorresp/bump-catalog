'use client';

import Image from 'next/image';
import { useState } from 'react';
import AddToListButton from './buttons/AddToListButton';
import { CardProps } from '@/utils/types';
import { useGlobalContext } from '../../context/GlobalContext';

export default function Card({ type, id, imageSrc, altText, title, subtitle }: CardProps) {
  const { addToList, addingToList, setAddingToList } = useGlobalContext();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isAdded, setIsAdded] = useState<boolean>(false);

  const handleAddClick = async () => {
    setIsLoading(true);
    setAddingToList(true);
    const added = await addToList(type, id);
    setIsAdded(added);
    setAddingToList(false);
    setIsLoading(false);
  };

  return (
    <div className='w-full h-full p-3 text-white'>
      <div className='flex flex-col p-5 relative overflow-hidden rounded-xl h-full'>
        <Image
          src={imageSrc}
          alt={altText}
          className='top-0 left-0 -z-10 blur-lg'
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
        <div className='absolute w-full h-full top-0 left-0 -z-10 bg-gradient-to-t from-40% from-black to-transparent'></div>
        <div className='absolute w-full h-3/4 rounded-t-xl top-[0] left-0 -z-10 border-t border-l border-r border-dashed border-black'></div>
        <div className='aspect-square relative'>
          <Image
            src={imageSrc}
            alt={altText}
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
        </div>
        <p className='max-w-full font-semibold mt-6 card-title'>{title}</p>
        <p className='text-slate-200 mt-0.5 font-extralight mb-5'>{subtitle}</p>
        <div className='w-full mt-auto'>
          <AddToListButton onClick={handleAddClick} isAdded={isAdded} isLoading={isLoading}/>
        </div>
      </div>
    </div>
  )
};
