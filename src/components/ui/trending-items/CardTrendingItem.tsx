import { ChartAlbum, ChartTrack, ChartArtistWithPosition } from '@/utils/types';
import Image from 'next/image';
import AddIcon from '@/components/icons/AddIcon';

type Props = {
  artist: ChartArtistWithPosition | null;
  album: ChartAlbum | null;
  track: ChartTrack | null;
  key: string;
};

export default function CardTrendingItem({ album, artist, track, key }: Props) {
  if ((album ? 1 : 0) + (artist ? 1 : 0) + (track ? 1 : 0) !== 1) {
    console.error('Exactly one of album, artist, or track should be passed to CardTrendingItem.');
    return null;
  };

  return (
    <div className='group relative text-slate-100 rounded-xl flex-[0_0_20%]' key={key}>
      <div className='w-full h-full p-3'>
      {album && (
        <div className='flex flex-col p-5 relative overflow-hidden rounded-xl h-full'>
          <Image 
            src={album.cover_xl} 
            alt=''
            className='top-0 left-0 -z-10 blur-lg'
            fill
          >
          </Image>
          <div className='absolute w-full h-full top-0 left-0 -z-10 bg-gradient-to-t from-40% from-black to-transparent'>
          </div>
          <div className='absolute w-full h-3/4 rounded-t-xl top-[0] left-0 -z-10 border-t border-l border-r border-dashed border-black'>
          </div>
          <div className='aspect-square relative'>
            <Image 
              src={album.cover_xl} 
              alt={`The album cover for ${album.title}`}
              fill
            >
            </Image>
          </div>
          <p className='max-w-full font-semibold mt-6 card-title'>{album.title}</p>
          <p className='text-slate-200 mt-0.5 font-extralight mb-3'>{album.artist.name}</p>
        </div>
      )}

      {artist && (
        <div className='flex flex-col p-5 relative overflow-hidden rounded-xl h-full'>
          <Image 
            src={artist.picture_xl} 
            alt=''
            className='top-0 left-0 -z-10 blur-lg'
            fill
          >
          </Image>
          <div className='absolute w-full h-full top-0 left-0 -z-10 bg-gradient-to-t from-40% from-black to-transparent'>
          </div>
          <div className='absolute w-full h-3/4 rounded-t-xl top-[0] left-0 -z-10 border-t border-l border-r border-dashed border-black'>
          </div>
          <div className='aspect-square relative'>
            <Image 
              src={artist.picture_xl} 
              alt={`${artist.name}`}
              fill
            >
            </Image>
          </div>
          <p className='max-w-full font-semibold mt-6 mb-4 card-title'>{artist.name}</p>
        </div>
      )}

      {track && (
        <div className='flex flex-col p-5 relative overflow-hidden rounded-xl h-full'>
          <Image 
            src={track.album.cover_xl} 
            alt=''
            className='top-0 left-0 -z-10 blur-lg'
            fill
          >
          </Image>
          <div className='absolute w-full h-full top-0 left-0 -z-10 bg-gradient-to-t from-40% from-black to-transparent'>
          </div>
          <div className='absolute w-full h-3/4 rounded-t-xl top-[0] left-0 -z-10 border-t border-l border-r border-dashed border-black'>
          </div>
          <div className='aspect-square relative'>
            <Image 
              src={track.album.cover_xl} 
              alt={`The cover for ${track.album.cover_xl}`}
              fill
            >
            </Image>
          </div>
          <p className='max-w-full font-semibold mt-6 card-title'>{track.title}</p>
          <p className='text-slate-200 mt-0.5 font-extralight mb-3'>{track.artist.name}</p>
        </div>
      )}
      {/* <AddIcon classNames='w-[20px] bg-white ml-auto'/> */}
      </div>
    </div>
  )
};