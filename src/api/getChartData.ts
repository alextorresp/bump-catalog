import { ChartType } from '@/utils/types';
import { ApiReturnObject } from '@/utils/types';

export default async function getChartData<T>( chartType: ChartType ): Promise<ApiReturnObject<T> | null> {
  try {
    const response = await fetch(`https://api.deezer.com/chart/0/${chartType}`, {
      next: { revalidate:  60 * 60 * 24 }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    };

    const data: ApiReturnObject<T> = await response.json();

    return data || null;
  } catch (error) {
    console.log('Error fetching chart data', error );
    return null;
  };
};