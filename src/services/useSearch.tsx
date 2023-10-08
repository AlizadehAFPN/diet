// useSearch.ts

import {CarInfo} from '../Interface';

export const useSearch = (data: CarInfo[]) => {
  const search = (query: string) => {
    if (!query) {
      return data; // Return the original data if the query is empty
    }

    const normalizedQuery = query.toLowerCase();
    return data.filter(
      item =>
        item.brand.toLowerCase().includes(normalizedQuery) ||
        item.category.toLowerCase().includes(normalizedQuery) ||
        item.model.toLowerCase().includes(normalizedQuery) ||
        item.version.toLowerCase().includes(normalizedQuery),
    );
  };

  return {search};
};
