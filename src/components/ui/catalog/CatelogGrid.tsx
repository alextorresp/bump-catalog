import { CatelogItem } from '@/utils/types';
import CatelogCard from './CatelogCard';
import ButtonOne from '../buttons/ButtonOne';
import Image from 'next/image';

type Props= {
  title: string;
  type: string;
  data: CatelogItem[];
};

export default function CatelogGrid({ title, data }: Props) {
  return (
    <div className={`relative flex flex-col p-5 border border-black rounded-xl pb-5 overflow-hidden text-white
    ${data[0] ? 'bg-transparent': 'bg-black text-white'}`}
    >
      {data[0] && 
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
      }

      <h3 className='font-bold mb-6 z-10 text-center bg-black rounded-md py-3 '>{title}</h3>
      <div className={`
        ${!data[0] ? 'hidden' : 'grid'} 
        grid-cols-1 w-full place-items-center`}
        >
        
        <div className='md:col-span-1 grid-rows-1 gap-4 md:w-[30%] sm:w-[65%] w-[65%] md:mb-10 mt-6'>
          {data[0] && (
            <CatelogCard position={1} itemData={data[0]} />
          )}
        </div>

        
        <div className={`
          ${!data[5] ? 'md:grid-rows-1' : 'md:grid-rows-2'} 
          ${!data[1] ? 'hidden' : 'grid'}
          md:gap-2 lg:gap-3 w-full mb-3 place-items-center`}
          >
          <div className='row-1 grid md:grid-cols-5 grid-cols-1 p-7 md:gap-[15px] lg:gap-[30px] md:border border-gray-400 rounded-xl border-dashed md:w-full sm:w-[70%] w-[70%]'>
            {data.slice(1, 6).map((item, index) => (
              <CatelogCard position={index + 2} itemData={item} key={index}/>
            ))}
          </div>

          <div className={`row-2
            ${!data[5] ? 'hidden' : 'grid '} 
            md:grid-cols-5 grid-cols-1 gap-4 md:border border-gray-400 p-7 rounded-xl border-dashed md:w-full sm:w-[70%] w-[70%]`}
            >
            {data.slice(6, 11).map((item, index) => (
              <CatelogCard position={index + 7} itemData={item} key={index}/>
            ))}
          </div>
        </div>
      </div>

      <div className='flex flex-row justify-between mt-3 mb-2'>
      {data.length < 10 && 
        <ButtonOne text='Add items!' link='/explore' className='border-none z-20 hover:bg-slate-300 hover:text-black text-black w-[150px] text-center'/>
      }

      {data.length >= 2 &&
        <ButtonOne text='Reorder Items' className='hover:bg-slate-300 border-none z-20 text-black hover:text-black w-[150px]'/>
      }
      </div>
  </div>
)
};