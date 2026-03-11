/**
 * Derives language statistics from a list of GitHub repo objects.
 * @param {Array} repos
 * @returns {Array<{ name: string, count: number, percentage: number }>}
 */
export function computeLangStats(repos) {
  const map = {}
  repos.forEach((repo) => {
    if (repo.language) {
      map[repo.language] = (map[repo.language] ?? 0) + 1
    }
  })
  const entries = Object.entries(map).sort((a, b) => b[1] - a[1])
  const total   = entries.reduce((sum, [, c]) => sum + c, 0)
  return entries.map(([name, count]) => ({
    name,
    count,
    percentage: total > 0 ? Math.round((count / total) * 100) : 0,
  }))
}

/**
 * Returns the top N languages from a stats array.
 * @param {Array} stats
 * @param {number} n
 * @returns {Array}
 */
export function topN(stats, n = 8) {
  return stats.slice(0, n)
}
