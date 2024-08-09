import getChartData from '@/api/getChartData';
import { AlbumChartList, ArtistChartList, TrackChartList, ChartType, ChartAlbum, ChartArtistWithPosition, ChartTrack } from '@/utils/types';
import CardTrendingItem from './CardTrendingItem';
import { v4 as uuidv4 } from 'uuid';

type ChartItemsList = AlbumChartList | ArtistChartList | TrackChartList;

export default async function RowTrendingItems({ chartType }: { chartType: ChartType }) {
  let response: ChartItemsList | null = null;

  switch (chartType) {
    case 'albums':
      response = await getChartData<AlbumChartList>(chartType);
      break;
    case 'artists':
      response = await getChartData<ArtistChartList>(chartType);
      break;
    case 'tracks':
      response = await getChartData<TrackChartList>(chartType);
      break;
    default:
      throw new Error('Invalid chart type');
  };

  if (!response || !response.data) {
    return <p>Sorry, please try again in a few minutes.</p>;
  };

  const chartData = response.data;

  return (
    <div className='flex flex-row gap-5 overflow-hidden min-w-fit border border-black p-6 rounded-xl'>
      {chartData.map((item) => (
        <CardTrendingItem
          key={uuidv4()}
          album={chartType === 'albums' ? item as ChartAlbum : null}
          artist={chartType === 'artists' ? item as ChartArtistWithPosition : null}
          track={chartType === 'tracks' ? item as ChartTrack : null}
        />
      ))}
    </div>
  );
}
