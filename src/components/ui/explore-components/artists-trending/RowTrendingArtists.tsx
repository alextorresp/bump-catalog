import { ArtistChartList } from '@/utils/types';
import getChartData from '@/api/getChartData';

export default async function RowTrendingArtists() {
  const response = await getChartData<ArtistChartList | null>('artists');

  if (!response || !response.data) return <p>Sorry, please try again in a few minutes.</p>;

  const chartData = response.data;

  return (
    <div className='flex flex-row gap-3'>
      {chartData.map((artist) => (
        <div key={artist.id}>{artist.name}</div>
      ))}
    </div>
  )
};