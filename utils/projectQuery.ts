type ProjectQueryState = {
  activeFilter: string;
  activeSort: string;
};

/**
 * Builds the querystring carrying the active portfolio filter/sort so it survives
 * navigation to a project page and back. `filterParamKey` differs by call site:
 * the portfolio grid link uses "from", the project-page "back to gallery" link uses "category".
 */
export function buildProjectQueryString(
  { activeFilter, activeSort }: ProjectQueryState,
  filterParamKey: 'from' | 'category' = 'from'
): string {
  return new URLSearchParams({
    ...(activeFilter !== 'all' && { [filterParamKey]: activeFilter }),
    ...(activeSort !== 'latest' && { sort: activeSort }),
  }).toString();
}
