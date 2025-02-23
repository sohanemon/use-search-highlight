"use client"
import React, { } from 'react';
import { useSearchHighlight } from './search-highlight';

const SearchHighlight = () => {
  const { searchTerm, setSearchTerm } = useSearchHighlight('article', 'css')


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
      <div className="mx-auto py-16 max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-title text-balance text-4xl font-semibold lg:text-5xl">CSS Custom Highlight API</h2>
          <p className="text-body mt-4">Modern web standard that enables developers to programmatically style arbitrary text ranges.</p>
        </div>
      </div>
      <form className="space-y-4 max-w-xs mx-auto w-full" data-shade="900">
        <div className="field">
          <label className="text-title" htmlFor="search">Search Term</label>
          <input onChange={handleInputChange} value={searchTerm} type='text' id="search" className="input variant-mixed sz-md" />
        </div>
      </form>
      <article className='pt-20'>
        The CSS Custom Highlight API is a web standard that allows developers to style specific text ranges within a document using JavaScript and CSS, without altering the document&apos;s structure. This is particularly useful for applications like search result highlighting, spellchecking, or syntax highlighting in code editors.<br /><br />Traditionally, highlighting text on a webpage required wrapping the desired text in elements like spans with specific classes or styles, which modified the DOM and could lead to performance issues, especially with large documents or dynamic content. The Custom Highlight API addresses these challenges by enabling the creation of Range objects in JavaScript to define the portions of text to be highlighted. These ranges are then associated with Highlight objects and registered with the browser&apos;s HighlightRegistry. Styling is applied using the ::highlight() pseudo-element in CSS.<br /> <br />To utilize this API, developers create Range objects to specify the text segments they wish to highlight. These ranges are then used to instantiate Highlight objects, which are registered in the HighlightRegistry accessible via CSS.highlights. Once registered, these highlights can be styled using CSS rules defined with the ::highlight() pseudo-element.<br /><br />As of now, the CSS Custom Highlight API is a Working Draft and may not be fully supported across all browsers. Developers should verify compatibility and consider fallbacks for unsupported browsers. Additionally, while the API simplifies the process of text highlighting, it&apos;s essential to handle overlapping highlights and accessibility considerations appropriately.<br /><br />For more detailed information, you can refer to the official documentation on the CSS Custom Highlight API.</article>
    </main>
  );
};

export default SearchHighlight;

