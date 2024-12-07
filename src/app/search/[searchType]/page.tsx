import SearchResultsGrid from '@/components/ui/search-results/SearchResultsGrid';

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  params: Promise<{ searchType: string }>;
};

export default async function SearchTypePage({ searchParams, params }: Props) {
  const [resolvedSearchParams, resolvedParams] = await Promise.all([searchParams, params]);

  const searchType = resolvedParams.searchType;
  const rawQuery = resolvedSearchParams['q'];

  const query =
    typeof rawQuery === 'string'
      ? rawQuery
      : Array.isArray(rawQuery)
      ? rawQuery[0]
      : undefined;

  if (!query) {
    return (
      <div>
        <h2>No query provided.</h2>
      </div>
    );
  }

  return (
    <div>
      <h2>
        Search Results for '{query}' in {searchType}
      </h2>

      <SearchResultsGrid searchType={searchType} query={query} />
    </div>
  )
};