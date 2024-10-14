import { IAlgortimDTO } from "@/dtos";

export default function bruteForce(
  document: string,
  search: string,
): IAlgortimDTO {
  const startTime = performance.now();
  let count = 0;
  let memory = 0;

  const indexes: number[] = [];
  const documentLength = document.length;
  const searchLength = search.length;

  for (let i = 0; i <= documentLength - searchLength; i++) {
    let j = 0;
    let stop = false;

    while (!stop) {
      if (
        j < searchLength &&
        document[i + j].toLowerCase() === search[j].toLowerCase()
      ) {
        j++;
      } else {
        stop = true;
      }

      count = count + 4;
    }

    if (j === searchLength) {
      indexes.push(i);
      count = count + 1;
    }

    count = count + 3;
  }

  const endTime = performance.now();
  const time = endTime - startTime;
  count = count + 3;
  memory = memory + 5;

  return {
    id: "algortim-1",
    name: "Força Bruta",
    indexes,
    count,
    time: Number(time.toFixed(4)),
    memory,
  };
}
