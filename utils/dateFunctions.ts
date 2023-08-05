import { formatDistanceToNow } from "date-fns";

export const getFormatDistancceToNow = (date: number) => {
  const fromNow = formatDistanceToNow(date);
  return `${fromNow} ago`;
};
