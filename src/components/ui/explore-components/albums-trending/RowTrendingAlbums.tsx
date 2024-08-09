import getChartData from '@/api/getChartData';
import { AlbumChartList } from '@/utils/types';
import CardTrendingAlbum from './CardTrendingAlbum';

export default async function RowTrendingAlbums() {
  const response = await getChartData<AlbumChartList | null>('albums');

  if (!response || !response.data) return <p>Sorry, please try again in a few minutes.</p>;

  const chartData = response.data;

  return (
    <div className='flex flex-row gap-5 overflow-hidden min-w-fit border border-black p-6 rounded-xl'>
      {chartData.map((album) => (
        <CardTrendingAlbum album={album} key={album.id}/>
      ))}
    </div>
  )
};