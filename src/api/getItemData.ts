export default async function getItemData<T>(type: string, ID: number): Promise<T | null> {
  try {
    const response = await fetch(`/api?type=${type}&id=${ID}`);
    console.log('response from server', response)
    if (!response.ok) {
      throw new Error('Error fetching item data');
    };

    const data: T = await response.json();
    return data || null;
  } catch (error) {
    console.log('Error fetching item data:', error);
    return null;
  };
};
