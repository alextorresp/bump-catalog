import { ChartAlbum, ChartTrack, ChartArtistWithPosition } from '@/utils/types';
import Image from 'next/image';
import AddIcon from '@/components/icons/AddIcon';

type Props = {
  artist: ChartArtistWithPosition | null;
  album: ChartAlbum | null;
  track: ChartTrack | null;
};

export default function CardTrendingItem({ album, artist, track }: Props) {
  if ((album ? 1 : 0) + (artist ? 1 : 0) + (track ? 1 : 0) !== 1) {
    console.error('Exactly one of album, artist, or track should be passed to CardTrendingItem.');
    return null;
  };

  return (
    <div className='group relative w-[250px] text-slate-100 rounded-xl p-6 overflow-hidden flex flex-col justify-between gap-1'>
      {album && (
        <div w-full>
          <Image 
            src={album.cover_xl} 
            alt=''
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
      )}

      {artist && (
        <div w-full>
          <Image 
            src={artist.picture_xl} 
            alt=''
            className='absolute top-0 left-0 -z-10 blur-lg'
            fill
          >
          </Image>
          <div className='absolute w-full h-full top-0 left-0 -z-10 bg-gradient-to-t from-40% from-black to-transparent'>
          </div>
          <div className='absolute w-full h-1/2 rounded-xl top-[0] left-0 -z-10 border border-dashed border-black'>
          </div>
          <Image 
            src={artist.picture_xl} 
            alt={`${artist.name}`}
            width={250}
            height={250}
          >
          </Image>
          <p className='max-w-full font-semibold mt-6 card-title'>{artist.name}</p>
        </div>
      )}

      {track && (
        <div w-full>
          <Image 
            src={track.album.cover_xl} 
            alt=''
            className='absolute top-0 left-0 -z-10 blur-lg'
            fill
          >
          </Image>
          <div className='absolute w-full h-full top-0 left-0 -z-10 bg-gradient-to-t from-40% from-black to-transparent'>
          </div>
          <div className='absolute w-full h-1/2 rounded-xl top-[0] left-0 -z-10 border border-dashed border-black'>
          </div>
          <Image 
            src={track.album.cover_xl} 
            alt={`The cover for ${track.album.cover_xl}`}
            width={250}
            height={250}
          >
          </Image>
          <p className='max-w-full font-semibold mt-6 card-title'>{track.title}</p>
          <p className='text-slate-200 mt-0.5 font-extralight mb-3'>{track.artist.name}</p>
        </div>
      )}
      <AddIcon classNames='w-[20px] bg-white'/>
    </div>
  )
};