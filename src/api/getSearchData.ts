import { ItemType } from '@/utils/types';
import { ApiReturnObject } from '@/utils/types';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export default async function getSearchData<T>( itemType: ItemType, query: string, index: string ): Promise<ApiReturnObject<T> | null> {
  try {
    let searchPath: string = '';
    
    if (index === '') {
      searchPath = `${itemType}?q=${encodeURIComponent(query)}`
    } else if (typeof index === 'string') {
      searchPath = `${itemType}?q=${encodeURIComponent(query)}&index=${encodeURIComponent(index)}`;
    };

    const response = await fetch(`https://api.deezer.com/search/${searchPath}`, {
      next: { revalidate:  60 * 60 * 24 }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    };

    const data: ApiReturnObject<T> = await response.json();

    if (!data || !data.data) {
      throw new Error('No data found');
    };

    return data;

  } catch (error) {
    console.log('Error fetching search data', error );
    return null;
  };
};