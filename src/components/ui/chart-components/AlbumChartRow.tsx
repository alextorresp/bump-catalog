import getChartData from '@/api/getChartData';
import { AlbumChartList } from '@/utils/types';

export default async function AlbumChartRow() {
  const response = await getChartData<AlbumChartList | null>('albums');

  if (!response || !response.data) return <p>Sorry, please try again in a few minutes.</p>;

  const chartData = response.data;

  return (
    <div className='flex flex-row gap-3'>
      {chartData.map((album) => (
        <div key={album.id}>{album.artist.name}</div>
      ))}
    </div>
  )
};