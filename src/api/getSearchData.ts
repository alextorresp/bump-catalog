import { ItemType } from '@/utils/types';
import { ApiReturnObject } from '@/utils/types';

export default async function getSearchData<T>( itemType: ItemType, query: string ): Promise<ApiReturnObject<T> | null> {
  try {
    const response = await fetch(`https://api.deezer.com/search/${itemType}?q=${encodeURIComponent(query)}`, {
      next: { revalidate:  60 * 60 * 24 }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    };

    const data: ApiReturnObject<T> = await response.json();

    return data;

  } catch (error) {
    console.log('Error fetching search data', error );
    return null;
  };
};