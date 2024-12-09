import getSearchData from '@/api/getSearchData';
import { AlbumSummary, AlbumTrack, ApiReturnObject, ChartArtist } from '@/utils/types';
import Card from '../Card';
import Link from 'next/link';

type Props = {
  searchType: string;
  query: string;
  index: string;
};

export default async function SearchResultsGrid({ searchType, query, index }: Props): Promise<JSX.Element> {
  let response: ApiReturnObject<AlbumSummary[] | AlbumTrack[] | ChartArtist[] > | null = null;

  switch (searchType) {
    case 'artist':
      response = await getSearchData<ChartArtist[]>(searchType, query, index);
      break;
    case 'album':
      response = await getSearchData<AlbumSummary[]>(searchType, query, index);
      break;
    case 'track':
      response = await getSearchData<AlbumTrack[]>(searchType, query, index);
      break;
    default:
      console.error('Invalid search type:', searchType);
      return <p>Invalid search type. Please check your input.</p>;
  };

  // Check for null or empty data
  if (!response?.data) {
    return <p>Sorry, invalid search filter or no data available. Please try again in a few minutes.</p>;
  };

  let data = response.data;
  const currentIndex = parseInt(index) || 0;
  const nextIndex = currentIndex + 25;
  const prevIndex = currentIndex > 0 ? currentIndex - 25 : 0;

  const renderCard = (item: any) => {
    switch (searchType) {
      case 'artist':
        const artist = item as ChartArtist;
        return <Card
          key={artist.id}
          type='artist'
          id={artist.id}
          imageSrc={artist.picture_xl}
          altText={artist.name}
          title={artist.name}
          subtitle=''
        />;
      case 'album':
        const album = item as AlbumSummary;
        return <Card
          key={album.id}
          type='album'
          id={album.id}
          imageSrc={album.cover_xl}
          altText={`The album cover for ${album.artist?.name}`}
          title={album.title}
          subtitle={album.artist?.name || ''}
        />;
      case 'track':
        const track = item as AlbumTrack;
        return <Card
          key={track.id}
          type='track'
          id={track.id}
          imageSrc={track.album.cover_xl}
          altText={`The album cover for ${track.title}`}
          title={track.title}
          subtitle={track.artist.name}
        />;
      default:
        return <p>Sorry, please try again in a few minutes.</p>;
    }
  };

  return (
    <div className='flex flex-col'>
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5'>
        {data.map(renderCard)}
      </div>

      <div className='flex justify-center gap-3 mt-5 w-full'>
          { currentIndex > 0 &&
            <Link href={`/search/${searchType}?q=${encodeURIComponent(query)}&index=${prevIndex}`}>
              <button className='px-3 py-1 md:px-4 md:py-2 rounded-2xl border border-black border-dashed bg-white hover:bg-gray-200 text-sm transition-all'>Back</button>
            </Link>
          }

          {response.next && 
            <Link href={`/search/${searchType}?q=${encodeURIComponent(query)}&index=${nextIndex}`}>
              <button className='px-3 py-1 md:px-3 md:py-2 rounded-2xl border border-black border-dashed bg-white hover:bg-gray-200 text-sm transition-all'>Next</button>
            </Link>
          }
        </div>  
    </div>
  )
};