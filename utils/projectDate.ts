const MONTH_INDEX: Record<string, number> = {
  january: 1, jan: 1,
  february: 2, feb: 2,
  march: 3, mar: 3,
  april: 4, apr: 4,
  may: 5,
  june: 6, jun: 6,
  july: 7, jul: 7,
  august: 8, aug: 8,
  september: 9, sept: 9, sep: 9,
  october: 10, oct: 10,
  november: 11, nov: 11,
  december: 12, dec: 12,
};

export const MONTH_NAMES = [
  'january', 'february', 'march', 'april', 'may', 'june',
  'july', 'august', 'september', 'october', 'november', 'december',
] as const;

/** Score a project date string (e.g. "March 2022", "2022") for chronological sorting. */
export const extractProjectDateValue = (date: string): number => {
  const yearMatches = date.match(/\d{4}/g);
  if (!yearMatches || yearMatches.length === 0) return 0;
  const year = Number.parseInt(yearMatches[0], 10) || 0;
  const normalizedDate = date.toLowerCase().replace(/\./g, ' ').replace(/-/g, ' ');
  const month = normalizedDate
    .split(/\s+/)
    .map((token) => token.trim())
    .map((token) => MONTH_INDEX[token])
    .find((value) => Boolean(value)) ?? 0;
  return year * 100 + month;
};

/** Extract just the 4-digit year for display (e.g. "March 2022" -> "2022"). */
export const formatProjectDisplayYear = (date: string): string => {
  const yearMatches = date.match(/\d{4}/g);
  if (!yearMatches || yearMatches.length === 0) return date;
  return yearMatches[0];
};

/** Parse a "Month Year" label (e.g. "March 2022") into its zero-based month index and year. */
export const parseMonthYearLabel = (value: string): { monthIndexZeroBased: number; year: number } | null => {
  const monthYear = value.trim().match(/^([A-Za-z]+)\s+(\d{4})$/);
  if (!monthYear) return null;
  const [, monthName, year] = monthYear;
  const monthIndex = MONTH_NAMES.indexOf(monthName.toLowerCase() as (typeof MONTH_NAMES)[number]);
  if (monthIndex === -1) return null;
  return { monthIndexZeroBased: monthIndex, year: Number(year) };
};
