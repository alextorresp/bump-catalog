const items = Array.from({ length: 25 }, (_, index) => `Item ${index + 1}`);
import CardSkeleton from '../CardSkeleton';

export function SearchResultsGridSkeleton() {
  return (
    <div className='flex flex-col'>
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5'>
        {items.map((item, index) => (
          <CardSkeleton key={index} id={index} type='artist' title='Loading...' artist_name='Loading...' imageSrc='/stock-2.jpg' alt_text=''/>
        ))
        }
      </div>

      <div className='flex justify-center gap-3 mt-5 w-full'>
        <button className='px-3 py-1 md:px-4 md:py-2 rounded-2xl border border-black border-dashed bg-white hover:bg-gray-200 text-sm transition-all'>Back</button>
        <button className='px-3 py-1 md:px-3 md:py-2 rounded-2xl border border-black border-dashed bg-white hover:bg-gray-200 text-sm transition-all'>Next</button>
        </div>  
    </div>
  )
};