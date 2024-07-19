'use client';

import { useState } from 'react';

type FormValuesType = {
  searchInput: string;
  searchType: 'all' | 'artists' | 'songs' | 'albums';
};

export default function SearchBar() {
  const [formValues, setFormValues] = useState<FormValuesType>({
    searchInput: '',
    searchType: 'all',
  });

  function handleFormChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setFormValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value
    }))
  };

  return (
    <form className='border rounded-full px-3 py-1 border-black'>
      <label className='sr-only' htmlFor='searchInput'></label>
      <input 
        id='searchInput'
        name='searchInput'
        placeholder='Search for an artist, song, or album'
        aria-label='Search input'
        required
        value={formValues.searchInput}
        onChange={handleFormChange}
      />

      <label className='sr-only' htmlFor='searchType'></label>
      <select
        id='searchType'
        name='searchType'
        aria-label='Search category'
        value={formValues.searchType}
        onChange={handleFormChange}
      >
        <option value='all'>All</option>
        <option value='artists'>Artists</option>
        <option value='songs'>Songs</option>
        <option value='albums'>Albums</option>
      </select>

      <button type='submit' aria-label="Submit search">Submit</button>
    </form>
  )
};