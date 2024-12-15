'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ToggleIcon from '@/components/icons/ToggleIcon';
import SearchIcon from '@/components/icons/SearchIcon';
import { ItemType } from '@/utils/types';

type SearchType = 'Artists' | 'Songs' | 'Albums';

const UIToAPIMap: Record<SearchType, ItemType> = {
  Songs: 'track',
  Albums: 'album',
  Artists: 'artist',
};

const searchTypes: SearchType[] = Object.keys(UIToAPIMap) as SearchType[];

export default function SearchBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [searchType, setSearchType] = useState<SearchType>('Songs');
  const router = useRouter();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!searchInput.trim()) return;

    if (!UIToAPIMap[searchType]) {
      return router.push('/not-found');
    };

    router.push(`/search/${UIToAPIMap[searchType]}?q=${encodeURIComponent(searchInput)}`);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleDropdownSelection = (type: SearchType) => {
    setSearchType(type);
    setIsDropdownOpen(false);
  };

  return (
    <form 
    onSubmit={handleSubmit}
    className='border rounded-xl border-black flex flex-row w-full h-[45px] items-center' 
    role='search'
    aria-label='Search bar'
    >
      <label className='sr-only' htmlFor='searchInput'>Search Input</label>
      <input 
        id='searchInput'
        type='text'
        name='searchInput'
        placeholder='Search ...'
        aria-label='Search input'
        required
        value={searchInput}
        onChange={handleInputChange}
        className='h-full pl-4 rounded-l-full flex flex-grow w-3/4 focus:outline-none'
      />

      <div
        className='relative h-full flex items-center justify-center sm:min-w-[93px] min-w-[78px]'
      >
        <label className='sr-only' htmlFor='searchTypeDropdown'>Search Type Dropdown Menu</label>
        <button
          id='searchTypeDropdown'
          type='button'
          aria-haspopup='listbox'
          aria-label='Search category'
          aria-expanded={isDropdownOpen}
          onClick={toggleDropdown}
          className='flex flex-row items-center justify-center h-full text-center gap-[5px] border-r border-l border-black border-dashed responsive-text w-full hover:bg-slate-300 transition-all'
        >
          {searchType}
          <ToggleIcon className={`transition-all ${isDropdownOpen ? 'rotate-90' : ''}`} height='12' fill='black'/>
        </button>

        {isDropdownOpen && (
          <ul role='listbox' 
          aria-label='Search type options'
          className='absolute sm:top-[39px] top-[29px] border-l border-r border-b border-dashed rounded-b-xl border-black bg-white w-full overflow-hidden z-10'
          >
            {searchTypes.map((type) => (
              <li 
                key={type}
                role='option'
                aria-selected={searchType === type}
                className={`cursor-pointer hover:bg-gray-300 py-1 first:pt-2 last:pb-2 text-center responsive-text px-2.5 ${searchType === type ? 'bg-slate-200' : ''}`}
                tabIndex={0}
                onClick={() => handleDropdownSelection(type)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleDropdownSelection(type);
                }}
              >
                {type}
              </li>
            ))}
          </ul>
        )}
      </div>

      <button type='submit' aria-label='Submit search' className='h-full flex items-center pl-3 pr-4 hover:bg-slate-300 transition-all rounded-e-xl'>
        <SearchIcon />
      </button>
    </form>
  )
};