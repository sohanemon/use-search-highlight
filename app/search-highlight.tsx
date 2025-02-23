import { useEffect, useState } from 'react';

type UseSearchHighlightReturn = {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

export const useSearchHighlight = (containerSelector: string = 'body'): UseSearchHighlightReturn => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (!window.CSS || !CSS.highlights) {
      console.warn('CSS Custom Highlight API is not supported in this browser.');
      return;
    }

    CSS.highlights.clear();

    if (!searchTerm) return;

    const highlightRanges: Range[] = [];
    const containerElements = document.querySelectorAll<HTMLElement>(containerSelector);

    containerElements.forEach((container) => {
      const treeWalker = document.createTreeWalker(
        container,
        NodeFilter.SHOW_TEXT,
        {
          acceptNode: (node) =>
            node.nodeValue?.toLowerCase().includes(searchTerm.toLowerCase())
              ? NodeFilter.FILTER_ACCEPT
              : NodeFilter.FILTER_REJECT,
        }
      );

      let currentNode: Node | null = treeWalker.nextNode();
      while (currentNode) {
        const nodeValue = currentNode.nodeValue?.toLowerCase();
        if (!nodeValue) continue;

        const searchValue = searchTerm.toLowerCase();
        let startIndex = 0;
        let matchIndex = nodeValue.indexOf(searchValue, startIndex);

        while (matchIndex !== -1) {
          const range = new Range();
          range.setStart(currentNode, matchIndex);
          range.setEnd(currentNode, matchIndex + searchTerm.length);
          highlightRanges.push(range);
          startIndex = matchIndex + searchTerm.length;
          matchIndex = nodeValue.indexOf(searchValue, startIndex);
        }

        currentNode = treeWalker.nextNode();
      }
    });

    if (highlightRanges.length > 0) {
      const highlight = new Highlight(...highlightRanges);
      CSS.highlights.set('search-highlight', highlight);
    }

    return () => {
      CSS.highlights.clear();
    };
  }, [searchTerm, containerSelector]);

  return { searchTerm, setSearchTerm };
};





