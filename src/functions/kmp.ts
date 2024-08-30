import { IAlgortimDTO } from "@/dtos";

export default function kmp(document: string, search: string): IAlgortimDTO {
  const startTime = performance.now();

  let count = 0;

  const indexes: number[] = [];
  const documentLength = document.length;
  const searchLength = search.length;
  count++;
  count++;
  count++;

  const lps = buildLPSArray(search);
  count = count + 4 + 8 * searchLength;

  let i = 0;
  let j = 0;
  count++;
  count++;

  while (i < documentLength) {
    if (document[i].toLowerCase() === search[j].toLowerCase()) {
      i++;
      j++;
      count++;
      count++;

      if (j === searchLength) {
        indexes.push(i - j);
        j = lps[j - 1];
        count++;
        count++;
        count++;
      }
    } else {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i++;
      }
      count++;
      count++;
    }
    count++;
    count++;
  }

  const endTime = performance.now();
  const time = endTime - startTime;

  return {
    name: "KMP",
    indexes,
    count,
    time: Number(time.toFixed(4)),
    memory: 0,
  };
}

function buildLPSArray(pattern: string): number[] {
  const length = pattern.length;
  const lps = new Array(length).fill(0);

  let len = 0;
  let i = 1;

  while (i < length) {
    if (pattern[i].toLowerCase() === pattern[len].toLowerCase()) {
      len++;
      lps[i] = len;
      i++;
    } else {
      if (len !== 0) {
        len = lps[len - 1];
      } else {
        lps[i] = 0;
        i++;
      }
    }
  }

  return lps;
}
