export const useSearch = (data: any[]) => {
  const search = (query: string) => {
    if (!query) {
      return data; // Return the original data if the query is empty
    }

    const normalizedQuery = query.toLowerCase();
    return data.filter(item =>
      item.name.toLowerCase().includes(normalizedQuery),
    );
  };

  return {search};
};
