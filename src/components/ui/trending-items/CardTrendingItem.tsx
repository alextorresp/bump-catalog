import { ChartAlbum, ChartTrack, ChartArtistWithPosition } from '@/utils/types';
import Card from '../Card';

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
    <div className='group relative text-slate-100 rounded-xl flex-[0_0_20%]'>
      {album && (
        <Card
          type='album'
          id={album.id}
          imageSrc={album.cover_xl} 
          altText={`The album cover for ${album.title}`}
          title={album.title}
          subtitle={album.artist.name}
          />
      )}

      {artist && (
        <Card
          type='artist' 
          id={artist.id}
          imageSrc={artist.picture_xl} 
          altText={`${artist.name}`}
          title={artist.name}
          subtitle=''
        />
      )}

      {track && (
        <Card
          type='track'
          id={track.id}
          imageSrc={track.album.cover_xl}
          altText={`The cover for ${track.album.cover_xl}`}
          title={track.title}
          subtitle={track.artist.name}
        />        
      )}
    </div>
  )
};