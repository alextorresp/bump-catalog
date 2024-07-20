'use client';

import { useState, useCallback } from 'react';
import { SearchType, FormValuesType } from '@/utils/types';
import ListItem from './ListItem';
import ToggleIcon from '@/components/icons/ToggleIcon';
import SearchIcon from '@/components/icons/SearchIcon';

export default function SearchBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [formValues, setFormValues] = useState<FormValuesType>({
    searchInput: '',
    searchType: 'All',
  });

  function handleFormChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value
    }))
  };

  // Wrap the function in useCallback to avoid unecessary re-renders of the child component ListItem
  const handleDropdownChange = useCallback((value: SearchType) => {
    setFormValues((prev) => ({
      ...prev,
      searchType: value,
    }));
    setIsDropdownOpen(false);
  }, []);

  return (
    <form className='border rounded-full pr-3 border-black flex flex-row w-1/3 h-full items-center'>
      <label className='sr-only' htmlFor='searchInput'></label>
      <input 
        id='searchInput'
        name='searchInput'
        placeholder='Search ...'
        aria-label='Search input'
        required
        value={formValues.searchInput}
        onChange={handleFormChange}
        className='pl-3 h-full rounded-l-full flex flex-grow w-3/4 focus:outline-none'
      />

      <label className='sr-only' htmlFor='searchType'></label>
      <div
        id='searchType'
        className='relative border-r border-l border-black min-h-full flex items-center justify-center min-w-[90px] border-dashed'
        aria-expanded={isDropdownOpen}
        aria-haspopup='listbox'
      >
        <button
          type='button'
          aria-label='Search category'
          onClick={() => setIsDropdownOpen((prev) => !prev)}
          className='px-3 flex flex-row items-center gap-[5px]'
        >
          {formValues.searchType}
          <ToggleIcon isDropdownOpen={isDropdownOpen}/>
        </button>

        {isDropdownOpen && (
          <ul role='listbox' className='absolute top-[30px] border rounded-b-xl border-black bg-white w-full overflow-hidden'>
            {['All', 'Songs', 'Albums', 'Artists'].map((type) => (
              <ListItem 
                key={type} 
                value={type as SearchType}
                isSelected={formValues.searchType === type} // Only passing down the necessary state to avoid unnecessary re-renders 
                handleDropdownChange={handleDropdownChange}
              />
            ))}
          </ul>
        )}
      </div>

      <button type='submit' aria-label='Submit search' className='h-full flex items-center pl-2'>
        <SearchIcon />
      </button>
    </form>
  )
};