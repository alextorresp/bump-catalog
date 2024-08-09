import { ChartType } from '@/utils/types';

export default async function getChartData<T>( chartType: ChartType ): Promise<T | null> {
  try {
    const response = await fetch(`https://api.deezer.com/chart/0/${chartType}`, {
      next: { revalidate:  60 * 60 * 24 }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    };

    const data = await response.json() as T;
      
    return data;

  } catch (error) {
    console.log('Error fetching album chart', error );
    return null;
  };
};