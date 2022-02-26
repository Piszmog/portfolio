const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
  'Present',
];

export const compare = (a: string, b: string): number => {
  const aParts = a.split(' ');
  const bParts = b.split(' ');
  const aYear = parseInt(aParts[1]);
  const bYear = parseInt(bParts[1]);
  if (aYear > bYear) {
    return 1;
  } else if (aYear < bYear) {
    return -1;
  } else {
    const aMonth = monthNames.indexOf(aParts[0]);
    const bMonth = monthNames.indexOf(bParts[0]);
    if (aMonth > bMonth) {
      return 1;
    } else if (aMonth < bMonth) {
      return -1;
    } else {
      return 0;
    }
  }
};
