/**
 * Returns the correct asset path considering the base URL for GitHub Pages deployment.
 * In development: /path/to/asset
 * In production: /portfolio/path/to/asset
 */
export function getAssetPath(path: string): string {
  const base = import.meta.env.BASE_URL;
  // Remove leading slash from path if present, then prepend base
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`;
}
