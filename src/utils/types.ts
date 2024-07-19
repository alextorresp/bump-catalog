export type IconProps = {
  classNames: string;
};

export type SearchType = 'All' | 'Artists' | 'Songs' | 'Albums';

export type FormValuesType = {
  searchInput: string;
  searchType: SearchType;
};