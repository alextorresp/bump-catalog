import Image from 'next/image';
import { CatelogItem } from '@/utils/types';
import CatelogCard from './CatelogCard';
import Button from '../buttons/Button';
import Link from 'next/link';

type Props= {
  title: string;
  type: string;
  data: CatelogItem[];
};

export default function CatelogGrid({ title, data, type }: Props) {
  const hasData = data.length > 0;
  const hasMoreThanFiveItems = data.length >= 6;

  return (
    <div 
      className={`relative flex flex-col p-5 border border-black rounded-xl pb-5 overflow-hidden text-white
      ${hasData ? 'bg-transparent': 'bg-white text-black border-dashed'}`}
    >
      {
        hasData && (
          <div className='absolute w-full h-full top-0 left-0'>
            <Image
              src={data[0].imageSrc}
              alt={data[0].title}
              className='top-0 left-0 -z-20 blur-md'
              fill
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            />
            <div className='absolute w-full h-full top-0 left-0 -z-10 bg-gradient-to-t from-40% from-black to-transparent'></div>
          </div>
      )}

      <h3 className='font-bold mb-6 z-10 text-center bg-black rounded-md py-3 '>{title}</h3>

      {/* Grid displaying list */}
      <div className={`${!hasData ? 'hidden' : 'grid'} grid-cols-1 w-full place-items-center`}>
        {/* Item #1 */}
        <div 
          className='md:col-span-1 grid-rows-1 gap-4 md:w-[30%] sm:w-[65%] w-[65%] md:mb-10 mt-6'>
          {hasData && (
            <CatelogCard position={1} itemData={data[0]} type={type}/>
          )}
        </div>

        {/* Items #2-10 */}
        <div 
          className={`
          ${!hasMoreThanFiveItems ? 'md:grid-rows-1' : 'md:grid-rows-2'} 
          ${!data[1] ? 'hidden' : 'grid'}
          md:gap-2 lg:gap-3 w-full mb-3 place-items-center`}
        >
          {/* Items #2-6 */}
          <div className='row-1 grid md:grid-cols-5 grid-cols-1 p-7 md:gap-[15px] lg:gap-[30px] md:border border-gray-400 rounded-xl border-dashed md:w-full sm:w-[70%] w-[70%]'>
            {data.slice(1, 6).map((item, index) => (
              <CatelogCard position={index + 2} itemData={item} key={index} type={type}/>
            ))}
          </div>
          
          {/* Items 7-10 */}
          <div className={`row-2
            ${!hasMoreThanFiveItems ? 'hidden' : 'grid '} 
            md:grid-cols-5 grid-cols-1 md:gap-[15px] lg:gap-[30px] md:border border-gray-400 p-7 rounded-xl border-dashed md:w-full sm:w-[70%] w-[70%]`}
            >
            {data.slice(6, 11).map((item, index) => (
              <CatelogCard position={index + 7} itemData={item} key={index} type={type}/>
            ))}
          </div>
        </div>
      </div>

      {!hasData && <p className='text-black text-center'>No items. Go explore and add some!</p>}

      <div className='flex flex-row justify-center gap-4 mt-3 mb-2'>
        {data.length < 10 && 
          (
            <Link href={'/explore'} className='z-10'>
              <Button variant={'solid'} size={'standard'}>Add Items!</Button>
            </Link>
          )
        }

      {data.length >= 2 &&
      (
        <Link href={`/reorder-items?type=${type}`} className='z-10'>
          <Button variant={'solid'} size={'standard'}>Reorder Items!</Button>
        </Link>
      )
      }
      </div>
  </div>
)
};