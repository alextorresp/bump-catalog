import getSearchData from '@/api/getSearchData';
import { AlbumSummary, AlbumTrack, ApiReturnObject, ChartArtist, GeneralSearchResult } from '@/utils/types';
import Card from '../Card';

type Props = {
  searchType: string;
  query: string;
};

export default async function SearchResultsGrid({ searchType, query }: Props) {
  let response: ApiReturnObject<AlbumSummary[] | AlbumTrack[] | ChartArtist[] | GeneralSearchResult[]> | null = null;

  switch (searchType) {
    case 'artist':
      response = await getSearchData<ChartArtist[]>(searchType, query);
      break;
    case 'album':
      response = await getSearchData<AlbumSummary[]>(searchType, query);
      break;
    case 'track':
      response = await getSearchData<AlbumTrack[]>(searchType, query);
      break;
    default:
      console.error('Invalid search type:', searchType);
      return <p>Invalid search type. Please check your input.</p>;
  };

  if (!response) {
    return <p>Sorry, invalid search filter.</p>;
  } else if (!response.data) {
    return <p>Sorry, please try again in a few minutes.</p>;
  };

  let data = response.data;

  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5'>
      {
        data.map((item) => {
          if (searchType === 'artist') {
            const artist = item as ChartArtist;
            return <Card
              key={artist.id}
              type='artist' 
              id={artist.id} 
              imageSrc={artist.picture_xl} 
              altText={artist.name}
              title={artist.name}
              subtitle=''
            />
          } else if (searchType === 'album') {
            const album = item as AlbumSummary;
            return <Card 
              key={album.id}
              type='album'
              id={album.id}
              imageSrc={album.cover_xl}
              altText={`The album cover for ${album.artist?.name}`}
              title={album.title}
              subtitle={album.artist?.name || ''}
            />
          } else if (searchType === 'track' || searchType === '') {
            const track = item as AlbumTrack;
            return <Card 
            key={track.id}
            type='track'
            id={track.id}
            imageSrc={track.album.cover_xl}
            altText={`The album cover for ${track.title}`}
            title={track.title}
            subtitle={track.artist.name}
            />
          }
          return <p>Sorry, please try again in a few minutes.</p>
        })
      }
    </div>
  )
};