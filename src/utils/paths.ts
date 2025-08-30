/**
 * Get the correct path for assets (images/videos) based on environment
 * This handles GitHub Pages deployment where assets are served from /kolaba/
 */
export function getAssetPath(path: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '/kolaba' : '';
  return `${basePath}${path}`;
}
