import { useState, useMemo } from 'react'
import RepoCard from '../RepoCard/RepoCard'
import FilterBar from '../FilterBar/FilterBar'
import { computeLangStats } from '../../utils/langStats'

/**
 * RepoList
 * Renders the FilterBar and the responsive grid of RepoCard components.
 * Handles all sorting + language-filtering logic locally.
 *
 * Props:
 *   repos  Array of GitHub repo objects
 */
export default function RepoList({ repos }) {
  const [activeLang, setActiveLang] = useState(null)
  const [sortBy,     setSortBy]     = useState('updated')

  // Unique languages for the filter bar (sorted by frequency)
  const languages = useMemo(
    () => computeLangStats(repos).slice(0, 8).map((s) => s.name),
    [repos],
  )

  // Filtered + sorted repos
  const displayedRepos = useMemo(() => {
    const filtered = activeLang
      ? repos.filter((r) => r.language === activeLang)
      : repos

    return [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'stars':   return b.stargazers_count - a.stargazers_count
        case 'forks':   return b.forks_count      - a.forks_count
        case 'name':    return a.name.localeCompare(b.name)
        default:        return new Date(b.updated_at) - new Date(a.updated_at)
      }
    })
  }, [repos, activeLang, sortBy])

  return (
    <div>
      <FilterBar
        totalCount={displayedRepos.length}
        languages={languages}
        activeLang={activeLang}
        sortBy={sortBy}
        onLangChange={setActiveLang}
        onSortChange={setSortBy}
      />

      {displayedRepos.length === 0 ? (
        <div className="py-16 text-center text-sm" style={{ color: '#8b949e' }}>
          No repositories match the current filter.
        </div>
      ) : (
        <div className="grid gap-3 mt-4" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))' }}>
          {displayedRepos.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </div>
      )}
    </div>
  )
}
