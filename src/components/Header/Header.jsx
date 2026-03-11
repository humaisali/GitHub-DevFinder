import { GitHubLogo } from '../../icons'
import SearchBar from '../SearchBar/SearchBar'

/**
 * Header
 * Sticky top navigation bar with the GitHub logo, app title, and search bar.
 *
 * Props:
 *   onSearch  (username: string) => void
 *   loading   boolean
 */
export default function Header({ onSearch, loading }) {
  return (
    <header
      className="sticky top-0 z-50 flex items-center gap-4 px-5 py-3 flex-wrap"
      style={{
        background:   '#161b22',
        borderBottom: '1px solid #30363d',
      }}
    >
      {/* Brand */}
      <div className="flex items-center gap-2 shrink-0">
        <span style={{ color: '#e6edf3' }}>
          <GitHubLogo size={26} />
        </span>
        <span className="text-sm font-semibold whitespace-nowrap" style={{ color: '#e6edf3' }}>
          DevFinder
        </span>
      </div>

      {/* Search bar takes remaining space */}
      <SearchBar onSearch={onSearch} loading={loading} />
    </header>
  )
}
