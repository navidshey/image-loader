export const chunk = (arr: any, column: number) => {
  var chunks = [],
    i = 0,
    n = arr.length,
    len = Math.floor(n / column);

  while (chunks.length < column) {
    chunks.length < column - 1
      ? chunks.push(arr.slice(i, (i += len)))
      : chunks.push(arr.slice(i));
  }

  return chunks;
};
