export function parseUrl(url: string): URL | undefined {
  try {
    return new URL(url);
  } catch (_) {
    return undefined;
  }
}
