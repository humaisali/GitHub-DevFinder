/**
 * Shared formatting utilities used across the application.
 */

/**
 * Formats a raw ISO date string into a human-readable date.
 * @param {string|null} isoString
 * @returns {string}
 */
export function formatDate(isoString) {
  if (!isoString) return '—'
  return new Date(isoString).toLocaleDateString('en-US', {
    year:  'numeric',
    month: 'short',
    day:   'numeric',
  })
}

/**
 * Compacts large numbers: 1500 → "1.5k", 1000000 → "1.0M"
 * @param {number|null|undefined} n
 * @returns {string}
 */
export function formatNumber(n) {
  if (n === null || n === undefined) return '0'
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000)     return `${(n / 1_000).toFixed(1)}k`
  return String(n)
}

/**
 * Returns a relative time string, e.g. "3 days ago".
 * @param {string} isoString
 * @returns {string}
 */
export function timeAgo(isoString) {
  if (!isoString) return '—'
  const diff = Date.now() - new Date(isoString).getTime()
  const secs  = Math.floor(diff / 1000)
  const mins  = Math.floor(secs  / 60)
  const hours = Math.floor(mins  / 60)
  const days  = Math.floor(hours / 24)
  const weeks = Math.floor(days  / 7)
  const months= Math.floor(days  / 30)
  const years = Math.floor(days  / 365)

  if (years  > 0) return `${years} year${years  > 1 ? 's' : ''} ago`
  if (months > 0) return `${months} month${months > 1 ? 's' : ''} ago`
  if (weeks  > 0) return `${weeks} week${weeks  > 1 ? 's' : ''} ago`
  if (days   > 0) return `${days} day${days   > 1 ? 's' : ''} ago`
  if (hours  > 0) return `${hours} hour${hours  > 1 ? 's' : ''} ago`
  if (mins   > 0) return `${mins} min${mins   > 1 ? 's' : ''} ago`
  return 'just now'
}
