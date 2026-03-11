import { SortIcon } from '../../icons'
import { getLangColor } from '../../utils/langColors'

/**
 * FilterBar
 * A toolbar sitting above the repo grid.
 * Allows sorting by different criteria and filtering by language.
 *
 * Props:
 *   totalCount   number   – total repos after current filter
 *   languages    string[] – unique language list from all repos
 *   activeLang   string | null
 *   sortBy       string
 *   onLangChange (lang: string | null) => void
 *   onSortChange (sort: string) => void
 */
export default function FilterBar({
  totalCount,
  languages,
  activeLang,
  sortBy,
  onLangChange,
  onSortChange,
}) {
  return (
    <div className="flex flex-wrap items-center gap-2 pb-4" style={{ borderBottom: '1px solid #30363d' }}>

      {/* Repo count */}
      <span className="text-xs mr-2" style={{ color: '#8b949e' }}>
        {totalCount} {totalCount === 1 ? 'repository' : 'repositories'}
      </span>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Sort selector */}
      <div className="relative flex items-center gap-1.5">
        <span style={{ color: '#8b949e', display: 'flex' }}>
          <SortIcon size={14} />
        </span>
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="text-xs py-1.5 pl-2 pr-6 rounded-lg outline-none cursor-pointer transition-colors duration-150"
          style={{
            background: '#21262d',
            border:     '1px solid #30363d',
            color:      '#c9d1d9',
          }}
        >
          <option value="updated">Recently updated</option>
          <option value="stars">Most stars</option>
          <option value="forks">Most forks</option>
          <option value="name">Name A → Z</option>
        </select>
      </div>

      {/* Language filters */}
      {languages.length > 0 && (
        <div className="flex items-center gap-1.5 flex-wrap">
          {/* "All" pill */}
          <button
            onClick={() => onLangChange(null)}
            className="px-2.5 py-1 rounded-full text-xs font-medium transition-all duration-150"
            style={{
              background: !activeLang ? '#2f81f7' : '#21262d',
              border:     `1px solid ${!activeLang ? '#2f81f7' : '#30363d'}`,
              color:      !activeLang ? '#ffffff' : '#8b949e',
              cursor:     'pointer',
            }}
          >
            All
          </button>

          {/* Per-language pills */}
          {languages.slice(0, 6).map((lang) => {
            const isActive = activeLang === lang
            return (
              <button
                key={lang}
                onClick={() => onLangChange(isActive ? null : lang)}
                className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium transition-all duration-150"
                style={{
                  background: isActive ? `${getLangColor(lang)}22` : '#21262d',
                  border:     `1px solid ${isActive ? `${getLangColor(lang)}66` : '#30363d'}`,
                  color:      isActive ? getLangColor(lang) : '#8b949e',
                  cursor:     'pointer',
                }}
              >
                <span
                  className="inline-block rounded-full shrink-0"
                  style={{ width: 7, height: 7, background: getLangColor(lang) }}
                />
                {lang}
              </button>
            )
          })}
        </div>
      )}

    </div>
  )
}
