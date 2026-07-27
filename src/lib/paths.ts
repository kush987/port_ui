/** Matches `basePath` / `NEXT_PUBLIC_BASE_PATH` from next.config (GitHub Pages only). */
export function withBasePath(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (
    !base ||
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("//")
  ) {
    return path;
  }
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}
