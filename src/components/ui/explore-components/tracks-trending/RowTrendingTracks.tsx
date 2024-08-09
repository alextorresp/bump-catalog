import { TrackChartList } from '@/utils/types';
import getChartData from '@/api/getChartData';

export default async function RowTrendingTracks() {
  const response = await getChartData<TrackChartList | null>('tracks');


  if (!response || !response.data) return <p>Sorry, please try again in a few minutes.</p>;

  const chartData = response.data;

  return (
    <div className='flex flex-row gap-3'>
      {chartData.map((track) => (
        <div key={track.id}>{track.title}</div>
      ))}
    </div>
  )
};