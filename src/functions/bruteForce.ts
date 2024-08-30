import { IAlgortimDTO } from "@/dtos";

export default function bruteForce(
  document: string,
  search: string,
): IAlgortimDTO {
  const startTime = performance.now();

  let count = 0;

  const indexes: number[] = [];
  const documentLength = document.length;
  const searchLength = search.length;
  count++;
  count++;
  count++;

  for (let i = 0; i <= documentLength - searchLength; i++) {
    let j = 0;
    let stop = false;
    count++;
    count++;

    while (!stop) {
      if (
        j < searchLength &&
        document[i + j].toLowerCase() === search[j].toLowerCase()
      ) {
        j++;
        count++;
      } else {
        stop = true;
        count++;
      }
      count++;
      count++;
    }

    if (j === searchLength) {
      indexes.push(i);
      count++;
    }

    count++;
  }

  const endTime = performance.now();
  const time = endTime - startTime;

  return {
    name: "Força Bruta",
    indexes,
    count,
    time: Number(time.toFixed(4)),
    memory: 0,
  };
}
