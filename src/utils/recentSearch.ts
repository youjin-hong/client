const RECENT_KEY = 'recent_searches';

export function saveRecentSearch(keyword: string) {
  if (!keyword.trim()) return;
  const prev = JSON.parse(localStorage.getItem(RECENT_KEY) || '[]');
  const filtered = prev.filter((item: string) => item !== keyword);
  const updated = [keyword, ...filtered].slice(0, 5);
  localStorage.setItem(RECENT_KEY, JSON.stringify(updated));
}

export function getRecentSearches(): string[] {
  return JSON.parse(localStorage.getItem(RECENT_KEY) || '[]');
}

export function clearRecentSearches() {
  localStorage.removeItem(RECENT_KEY);
}
