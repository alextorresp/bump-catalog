import { CatelogItem } from '@/utils/types';
import CatelogCard from './CatelogCard';

type Props= {
  title: string;
  type: string;
  data: CatelogItem[];
}

export default function CatelogRow({ title, data }: Props) {
  return (
    <div className='flex flex-col p-5 border border-black rounded-xl pb-9'>
      <h3 className='font-bold mb-2'>{title}</h3>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4 w-full place-items-center'>
        {/* First column takes 25% of the parent's width */}
        <div className='col-span-1'>
          {data[0] && (
            <CatelogCard position={1} itemData={data[0]} />
          )}
        </div>

        {/* Remaining 3 columns split up the rest of the 75% of parent's width */}
        <div className='col-span-3 grid md:grid-rows-2 grid-rows-1 gap-4'>
          <div className='grid md:grid-cols-5 grid-cols-1 gap-4 md:border border-black rounded-xl border-dashed'>
            {data.slice(1, 6).map((item, index) => (
              <div key={index} className='p-4'>
                <CatelogCard position={index + 2} itemData={item} />
              </div>
            ))}
          </div>

          <div className='grid md:grid-cols-5 grid-cols-1 gap-4 md:border border-black rounded-xl border-dashed'>
          {data.slice(6, 11).map((item, index) => (
            <div key={index} className='p-4'>
              <CatelogCard position={index + 7} itemData={item} />
            </div>
          ))}
          </div>
      </div>
    </div>
  </div>
)
};