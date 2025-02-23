"use client"
import React, { } from 'react';
import { useSearchHighlight } from './search-highlight';

const SearchHighlight = () => {
  const { setSearchTerm } = useSearchHighlight()


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <main className='container py-10'>
      <style>
        {`
::highlight(search-highlight) {
  background-color: blue;
  color: white;
}
`}
      </style>
      <form className="space-y-4 max-w-xs mx-auto w-full" data-shade="900">
        <div className="field">
          <label className="text-title" htmlFor="search">Search Term</label>
          <input onChange={handleInputChange} type='text' id="search" className="input variant-mixed sz-md" />
        </div>
      </form>
    </main>
  );
};

export default SearchHighlight;

