export default async function convertToBlob(url: string) {
  const response = await fetch(url);
  const responseBlob = await response.blob();
  return responseBlob;
}