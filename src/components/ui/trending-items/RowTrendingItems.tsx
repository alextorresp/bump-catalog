import getChartData from '@/api/getChartData';
import { ChartType, ChartAlbum, ChartArtistWithPosition, ChartTrack } from '@/utils/types';
import CardTrendingItem from './CardTrendingItem';
import { v4 as uuidv4 } from 'uuid';
import { ApiReturnObject } from '@/utils/types';

export default async function RowTrendingItems({ chartType }: { chartType: ChartType }) {
  let response: ApiReturnObject<ChartTrack[] | ChartAlbum[] | ChartArtistWithPosition[]> | null = null;

  switch (chartType) {
    case 'albums':
      response = await getChartData<ChartAlbum[]>(chartType);
      break;
    case 'artists':
      response = await getChartData<ChartArtistWithPosition[]>(chartType);
      break;
    case 'tracks':
      response = await getChartData<ChartTrack[]>(chartType);
      break;
    default:
      console.error('Invalid search type:', chartType);
      return <p>Invalid chart type.</p>;
  };

  if (!response || !response.data) {
    return <p>Sorry, please try again in a few minutes.</p>;
  };

  const chartData = response.data;

  return (
    <div className='w-full relative flex flex-row overflow-hidden border-black border rounded-xl'>
      <div className='flex flex-col w-full'>
        <div className='card-container overflow-x-auto custom-scrollbar'>
            <div className='slider flex'>
              {chartData.map((item) => (
                  <CardTrendingItem
                    key={uuidv4()}
                    album={chartType === 'albums' ? item as ChartAlbum : null}
                    artist={chartType === 'artists' ? item as ChartArtistWithPosition : null}
                    track={chartType === 'tracks' ? item as ChartTrack : null}
                  />
              ))}
            </div>
        </div>
      </div>
    </div>
  );
}
