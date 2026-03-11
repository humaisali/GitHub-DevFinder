import { useState } from 'react'
import { SearchIcon, SpinnerIcon } from '../../icons'

/**
 * SearchBar
 * Controlled search input with animated focus ring and loading state.
 *
 * Props:
 *   onSearch  (username: string) => void
 *   loading   boolean
 */
export default function SearchBar({ onSearch, loading }) {
  const [value,   setValue]   = useState('')
  const [focused, setFocused] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (value.trim() && !loading) onSearch(value.trim())
  }

  const isDisabled = loading || !value.trim()

  return (
    <form onSubmit={handleSubmit} className="flex flex-1 gap-2 max-w-xl">

      {/* Input wrapper */}
      <div className="relative flex-1">

        {/* Leading icon */}
        <span
          className="absolute left-3 top-1/2 -translate-y-1/2 flex pointer-events-none transition-colors duration-200"
          style={{ color: focused ? '#2f81f7' : '#8b949e' }}
        >
          <SearchIcon />
        </span>

        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="Search a GitHub username…"
          autoComplete="off"
          spellCheck={false}
          className="w-full py-2 pl-10 pr-4 text-sm rounded-lg outline-none transition-all duration-200"
          style={{
            background:  '#161b22',
            color:       '#e6edf3',
            border:      `1px solid ${focused ? '#2f81f7' : '#30363d'}`,
            boxShadow:   focused ? '0 0 0 3px rgba(47,129,247,0.15)' : 'none',
          }}
        />
      </div>

      {/* Submit button */}
      <button
        type="submit"
        disabled={isDisabled}
        className="flex items-center gap-2 px-5 py-2 text-sm font-semibold text-white rounded-lg whitespace-nowrap transition-all duration-200"
        style={{
          background:  isDisabled ? '#21262d' : '#238636',
          border:      '1px solid rgba(240,246,252,0.1)',
          cursor:      isDisabled ? 'not-allowed' : 'pointer',
          opacity:     !value.trim() ? 0.55 : 1,
        }}
        onMouseEnter={(e) => { if (!isDisabled) e.currentTarget.style.background = '#2ea043' }}
        onMouseLeave={(e) => { if (!isDisabled) e.currentTarget.style.background = '#238636' }}
      >
        {loading ? (
          <>
            <SpinnerIcon size={16} />
            Searching…
          </>
        ) : (
          'Search'
        )}
      </button>

    </form>
  )
}
