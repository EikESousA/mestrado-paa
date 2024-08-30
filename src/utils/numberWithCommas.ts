export default function numberWithCommas(value: string): string {
  return value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".");
}
