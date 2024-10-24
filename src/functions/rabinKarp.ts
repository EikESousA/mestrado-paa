import { IAlgortimDTO } from "@/dtos";

export default function rabinKarp(
  document: string,
  search: string,
): IAlgortimDTO {
  const startTime = performance.now();

  let count = 0;
  let memory = 0;

  const indexes: number[] = [];
  const prime = 101;
  const documentLength = document.length;
  const searchLength = search.length;

  if (searchLength > documentLength) {
    count = count + 1;
    const endTime = performance.now();
    const time = endTime - startTime;

    return {
      id: "algortim-3",
      name: "Rabin-Karp",
      indexes,
      count,
      time: Number(time.toFixed(4)),
      memory: 0,
    };
  }

  const base = 256;
  let hashSearch = 0;
  let hashDocument = 0;
  let highestBaseValue = 1;

  for (let i = 0; i < searchLength - 1; i++) {
    highestBaseValue = (highestBaseValue * base) % prime;
  }

  for (let i = 0; i < searchLength; i++) {
    hashSearch =
      (base * hashSearch + search[i].toLowerCase().charCodeAt(0)) % prime;
    hashDocument =
      (base * hashDocument + document[i].toLowerCase().charCodeAt(0)) % prime;
    count = count + 4;
  }

  for (let i = 0; i <= documentLength - searchLength; i++) {
    if (hashSearch === hashDocument) {
      let match = true;

      for (let j = 0; j < searchLength; j++) {
        if (document[i + j].toLowerCase() !== search[j].toLowerCase()) {
          match = false;
          count = count + 4;
          break;
        }
      }

      if (match) {
        indexes.push(i);
        count = count + 2;
      }

      count = count + 1;
    }

    if (i < documentLength - searchLength) {
      hashDocument =
        (base *
          (hashDocument -
            document[i].toLowerCase().charCodeAt(0) * highestBaseValue) +
          document[i + searchLength].toLowerCase().charCodeAt(0)) %
        prime;

      if (hashDocument < 0) {
        hashDocument += prime;
        count = count + 2;
      }

      count = count + 2;
    }

    count = count + 4;
  }

  count = count + 8;
  memory = memory + 8;
  const endTime = performance.now();
  const time = endTime - startTime;

  return {
    id: "algortim-3",
    name: "Rabin-Karp",
    indexes,
    count,
    time: Number(time.toFixed(4)),
    memory,
  };
}
