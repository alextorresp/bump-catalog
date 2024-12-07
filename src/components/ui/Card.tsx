import Image from 'next/image';
import AddToListButton from './buttons/AddToListButton';
import { CardProps } from '@/utils/types';

export default function Card({ imageSrc, altText, title, subtitle }: CardProps) {
  return (
    <div className='w-full h-full p-3'>
      <div className='flex flex-col p-5 relative overflow-hidden rounded-xl h-full'>
        <Image
          src={imageSrc}
          alt={altText}
          className='top-0 left-0 -z-10 blur-lg'
          fill
        />
        <div className='absolute w-full h-full top-0 left-0 -z-10 bg-gradient-to-t from-40% from-black to-transparent'></div>
        <div className='absolute w-full h-3/4 rounded-t-xl top-[0] left-0 -z-10 border-t border-l border-r border-dashed border-black'></div>
        <div className='aspect-square relative'>
          <Image
            src={imageSrc}
            alt={altText}
            fill
          />
        </div>
        <p className='max-w-full font-semibold mt-6 card-title'>{title}</p>
        <p className='text-slate-200 mt-0.5 font-extralight mb-5'>{subtitle}</p>
        <div className='w-full mt-auto'>
          <AddToListButton />
        </div>
      </div>
    </div>
  )
};
