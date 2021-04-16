export const chunk = (arr: any, column: number): any[] => {
  // eslint-disable-next-line prefer-const
  let chunks = [],
    i = 0;
  const n = arr.length,
    len = Math.floor(n / column);

  while (chunks.length < column) {
    chunks.length < column - 1
      ? chunks.push(arr.slice(i, (i += len)))
      : chunks.push(arr.slice(i));
  }

  return chunks;
};
