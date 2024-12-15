import Link from 'next/link';
import { Suspense } from 'react';
import SearchResultsGrid from '@/components/ui/search-results/SearchResultsGrid';

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  params: Promise<{ searchType: string }>;
};

export default async function SearchTypePage({ searchParams, params }: Props) {
  const [resolvedSearchParams, resolvedParams] = await Promise.all([searchParams, params]);

  const searchType = resolvedParams.searchType;
  const rawQuery= resolvedSearchParams['q'];
  const rawIndex = resolvedSearchParams['index'];

  const query =
    typeof rawQuery === 'string'
      ? rawQuery
      : Array.isArray(rawQuery)
      ? rawQuery[0]
      : undefined;

  const index = !rawIndex 
    ? '' 
    : Array.isArray(rawIndex) 
    ? rawIndex[0]
    : typeof rawIndex === 'string' 
    ? rawIndex
    : '';

  if (!query) {
    return (
      <div>
        <h2>No query provided.</h2>
      </div>
    );
  };

  return (
    <div>
      <div className='flex flex-row justify-between'>
        <h3 className='mb-2'>
          Results for '{query}' in {searchType.charAt(0).toUpperCase() + searchType.slice(1)}s
        </h3>
        
        <Link href={'/explore'}>
          <button className='border border-dashed rounded-full border-black py-1 px-3 hover:bg-gray-200 transition-all'>
            Back to search
          </button>
        </Link>
      </div>

      <Suspense fallback={<p>Loading...</p>} key={`${searchType}-${query}`}>
        <SearchResultsGrid searchType={searchType} query={query} index={index}/>
      </Suspense>
    </div>
  )
};