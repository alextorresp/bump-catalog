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
    <form className='border rounded-full border-black flex flex-row sm:w-[600px] sm:h-[40px] w-[100%] h-[30px] items-center'>
      <label className='sr-only' htmlFor='searchInput'></label>
      <input 
        id='searchInput'
        name='searchInput'
        placeholder='Search ...'
        aria-label='Search input'
        required
        value={formValues.searchInput}
        onChange={handleFormChange}
        className='h-full pl-4 rounded-l-full flex flex-grow w-3/4 focus:outline-none'
      />

      <label className='sr-only' htmlFor='searchType'></label>
      <div
        id='searchType'
        className='relative h-full flex items-center justify-center sm:min-w-[93px] min-w-[78px]'
        aria-expanded={isDropdownOpen}
        aria-haspopup='listbox'
      >
        <button
          type='button'
          aria-label='Search category'
          onClick={() => setIsDropdownOpen((prev) => !prev)}
          className='flex flex-row items-center justify-center h-full text-center gap-[5px] border-r border-l border-black border-dashed responsive-text w-full'
        >
          {formValues.searchType}
          <ToggleIcon isDropdownOpen={isDropdownOpen}/>
        </button>

        {isDropdownOpen && (
          <ul role='listbox' className='absolute sm:top-[39px] top-[29px] border-l border-r border-b border-dashed rounded-b-xl border-black bg-white w-full overflow-hidden'>
            {['Albums', 'All', 'Artists', 'Songs'].map((type) => (
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

      <button type='submit' aria-label='Submit search' className='h-full flex items-center pl-3 pr-4'>
        <SearchIcon />
      </button>
    </form>
  )
};