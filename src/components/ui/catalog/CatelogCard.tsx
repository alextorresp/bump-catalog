import { CatelogItem } from '@/utils/types';
import Image from 'next/image';

type Props = {
  position: number;
  itemData: CatelogItem
};

export default function CatelogCard({ position, itemData }: Props) {
  const { title, artist_name, id, type, imageSrc, release_date, album_name } = itemData;

  return (
    <div className='relative flex flex-col'>
      <div className=' top-0 left-0'>
        <p>{position}</p>
      </div>
      <div className='aspect-square relative'>
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes=''
        />
      </div>
      <p>{title}</p>
      { artist_name && <p>{artist_name}</p> }
      { release_date && <p>Release Date: {release_date.toString()}</p> }    
      { album_name && <p>Album: {album_name}</p> } 
    </div>
  )
};