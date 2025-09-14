export function extractFileName(url: string): string | undefined {
  return url.split('/').pop()?.split('.')[0];
}
