import getChartData from '@/api/getChartData';
import { AlbumChartList, ArtistChartList, TrackChartList, ChartType, ChartAlbum, ChartArtistWithPosition, ChartTrack } from '@/utils/types';
import CardTrendingItem from './CardTrendingItem';
import { v4 as uuidv4 } from 'uuid';
import ToggleIcon from '@/components/icons/ToggleIcon';


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
    <div className='w-full h-fit relative flex flex-col overflow-hidden'>
      <div className='flex flex-col'>
        <div className='flex flex-row gap-5 w-full overflow-x-hidden relative rounded-xl z-10'>
            {chartData.map((item) => (
              <div className='min-w-[20%] flex' key={uuidv4()}>
                <CardTrendingItem
                  album={chartType === 'albums' ? item as ChartAlbum : null}
                  artist={chartType === 'artists' ? item as ChartArtistWithPosition : null}
                  track={chartType === 'tracks' ? item as ChartTrack : null}
                />
              </div>
            ))}
          <div className='absolute top-0 right-0 w-[10%] h-full bg-gradient-to-r from-transparent to-black'>

          </div>
        </div>
        <div className='w-full mt-4'>
          <div className='h-full w-full flex items-center justify-between border border-dashed border-black py-1 rounded-md px-2'>
            <ToggleIcon height='17' className='rotate-180' fill='black'/>
            <div className='flex gap-2'>
              <div className='w-6 h-[3px] bg-black rounded-sm'></div>
              <div className='w-6 h-[3px] bg-black rounded-sm'></div>
            </div>
            <ToggleIcon height='17' className='' fill='black'/>
          </div>
        </div>
      </div>
    </div>
  );
}
