import { IAlgortimDTO } from "@/dtos";

export default function kmp(document: string, pattern: string): IAlgortimDTO {
  const startTime = performance.now();

  let count = 0;
  let memory = 0;

  const indexes: number[] = [];
  const documentLength = document.length;
  const patternLength = pattern.length;
  count = count + 3;
  memory = memory + 2;

  const lps = buildLPSArray(pattern);
  count = count + 4 + 8 * patternLength;
  memory = memory + 1 + patternLength;

  let i = 0;
  let j = 0;
  count = count + 2;
  memory = memory + 2;

  while (i < documentLength) {
    if (document[i].toLowerCase() === pattern[j].toLowerCase()) {
      i++;
      j++;
      count = count + 2;
    }

    if (j === patternLength) {
      indexes.push(i - j);
      j = lps[j - 1];
      count = count + 3;
    } else {
      if (
        i < documentLength &&
        pattern[j].toLowerCase() !== document[i].toLowerCase()
      ) {
        if (j !== 0) {
          j = lps[j - 1];
        } else {
          i++;
        }
        count = count + 2;
      }
    }

    count = count + 2;
  }

  const endTime = performance.now();
  const time = endTime - startTime;

  return {
    id: "algortim-2",
    name: "KMP",
    indexes,
    count,
    time: Number(time.toFixed(4)),
    memory,
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
      if (len === 0) {
        lps[i] = 0;
        i++;
      } else {
        len = lps[len - 1];
      }
    }
  }

  return lps;
}
