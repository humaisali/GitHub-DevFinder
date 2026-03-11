import { useState } from 'react'
import { StarIcon, ForkIcon, ClockIcon } from '../../icons'
import { getLangColor } from '../../utils/langColors'
import { formatNumber, timeAgo } from '../../utils/formatters'

/**
 * RepoCard
 * Displays a single GitHub repository with name, description, topics,
 * language, star count, fork count, and last-updated time.
 * Features a subtle lift + border highlight on hover.
 *
 * Props:
 *   repo  GitHub repo object
 */
export default function RepoCard({ repo }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col gap-2.5 p-5 rounded-xl transition-all duration-200"
      style={{
        background:  hovered ? '#21262d' : '#161b22',
        border:      `1px solid ${hovered ? 'rgba(47,129,247,0.45)' : '#30363d'}`,
        transform:   hovered ? 'translateY(-2px)' : 'none',
        boxShadow:   hovered ? '0 8px 24px rgba(0,0,0,0.45)' : 'none',
        cursor:      'default',
      }}
    >
      {/* ── Name + Badge ── */}
      <div className="flex items-start justify-between gap-2">
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold leading-snug truncate transition-colors duration-150"
          style={{ color: '#2f81f7' }}
          onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
          onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
        >
          {repo.name}
        </a>
        <span
          className="shrink-0 px-2 py-0.5 rounded-full text-xs font-medium"
          style={{
            background: '#21262d',
            border:     '1px solid #30363d',
            color:      '#8b949e',
          }}
        >
          {repo.fork ? 'fork' : 'public'}
        </span>
      </div>

      {/* ── Description ── */}
      {repo.description && (
        <p
          className="text-xs leading-relaxed line-clamp-2"
          style={{ color: '#8b949e' }}
        >
          {repo.description}
        </p>
      )}

      {/* ── Topics ── */}
      {repo.topics?.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {repo.topics.slice(0, 4).map((topic) => (
            <span
              key={topic}
              className="px-2 py-0.5 rounded-full text-xs"
              style={{
                background: 'rgba(47,129,247,0.1)',
                border:     '1px solid rgba(47,129,247,0.25)',
                color:      '#2f81f7',
              }}
            >
              {topic}
            </span>
          ))}
        </div>
      )}

      {/* ── Stats Row ── */}
      <div className="flex items-center gap-3 flex-wrap mt-auto pt-1">

        {/* Language dot */}
        {repo.language && (
          <div className="flex items-center gap-1.5 text-xs" style={{ color: '#8b949e' }}>
            <span
              className="inline-block rounded-full shrink-0"
              style={{
                width:      10,
                height:     10,
                background: getLangColor(repo.language),
              }}
            />
            {repo.language}
          </div>
        )}

        {/* Stars */}
        {repo.stargazers_count > 0 && (
          <div className="flex items-center gap-1 text-xs" style={{ color: '#8b949e' }}>
            <span style={{ color: '#e3b341', display: 'flex' }}>
              <StarIcon size={13} />
            </span>
            {formatNumber(repo.stargazers_count)}
          </div>
        )}

        {/* Forks */}
        {repo.forks_count > 0 && (
          <div className="flex items-center gap-1 text-xs" style={{ color: '#8b949e' }}>
            <span style={{ display: 'flex' }}>
              <ForkIcon size={13} />
            </span>
            {formatNumber(repo.forks_count)}
          </div>
        )}

        {/* Updated at */}
        <div className="flex items-center gap-1 text-xs ml-auto" style={{ color: '#8b949e' }}>
          <ClockIcon size={13} />
          Updated {timeAgo(repo.updated_at)}
        </div>
      </div>
    </div>
  )
}
