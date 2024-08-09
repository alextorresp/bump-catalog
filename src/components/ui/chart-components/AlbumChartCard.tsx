import { ChartAlbum } from '@/utils/types';
import Image from 'next/image';
import AddIcon from '@/components/icons/AddIcon';

type AlbumChartCardProps = {
  album: ChartAlbum;
}

export default function AlbumChartCard({ album }: AlbumChartCardProps) {
  return (
    <div className='group relative w-[250px] text-slate-100 rounded-xl p-6 overflow-hidden flex flex-col justify-between gap-1'>
      <div className='w-full'>
        <Image 
          src={album.cover_xl} 
          alt={`The album cover for ${album.title}`}
          className='absolute top-0 left-0 -z-10 blur-lg'
          fill
        >
        </Image>
        <div className='absolute w-full h-full top-0 left-0 -z-10 bg-gradient-to-t from-40% from-black to-transparent'>
        </div>
        <div className='absolute w-full h-1/2 rounded-xl top-[0] left-0 -z-10 border border-dashed border-black'>
        </div>
        <Image 
          src={album.cover_xl} 
          alt={`The album cover for ${album.title}`}
          width={250}
          height={250}
        >
        </Image>
        <p className='max-w-full font-semibold mt-6 card-title'>{album.title}</p>
        <p className='text-slate-200 mt-0.5 font-extralight mb-3'>{album.artist.name}</p>
      </div>
      <AddIcon classNames='w-[20px] bg-white'/>
    </div>
  )
};