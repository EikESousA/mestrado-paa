export default function bruteForce(document: string, search: string): number {
  let index = -1;

  let i = 0;

  const documentLength = document.length;
  const searchLength = search.length;

  while (i <= documentLength - searchLength + 1 && index === -1) {
    let k = i;
    let j = 1;

    while (
      document[k - 1].toLowerCase() === search[j - 1].toLowerCase() &&
      j <= searchLength
    ) {
      k++;
      j++;
    }

    if (j > searchLength) {
      index = i;
    }

    i++;
  }

  return index;
}
