import { useState, useMemo } from 'react'
import { ClockIcon, RepoIcon } from '../../icons'
import { getLangColor } from '../../utils/langColors'
import { formatDate, formatNumber } from '../../utils/formatters'
import { CONTRIB_LEVELS } from '../../constants/theme'

const WEEKS = 52
const DAYS  = 7

/**
 * Builds the 52×7 contribution grid from repo push/create dates.
 * Each cell gets an activity level from 0 (none) to 4 (high).
 */
function buildGrid(repos) {
  // Accumulate activity counts per date
  const activityMap = {}
  repos.forEach((repo) => {
    if (repo.pushed_at) {
      const d = repo.pushed_at.slice(0, 10)
      activityMap[d] = (activityMap[d] ?? 0) + 1 + (repo.stargazers_count > 5 ? 2 : 0)
    }
    if (repo.created_at) {
      const d = repo.created_at.slice(0, 10)
      activityMap[d] = (activityMap[d] ?? 0) + 1
    }
  })

  const today = new Date()
  const grid  = []

  for (let w = WEEKS - 1; w >= 0; w--) {
    const week = []
    for (let d = 0; d < DAYS; d++) {
      const date = new Date(today)
      date.setDate(date.getDate() - w * DAYS - (DAYS - 1 - d))
      const key  = date.toISOString().slice(0, 10)
      const raw  = activityMap[key] ?? 0
      const level = raw === 0 ? 0 : raw <= 1 ? 1 : raw <= 3 ? 2 : raw <= 6 ? 3 : 4
      week.push({ key, level })
    }
    grid.push(week)
  }

  return grid
}

/** Derives month label positions from the grid. */
function buildMonthLabels(grid) {
  const labels = []
  for (let w = 0; w < WEEKS; w++) {
    const month = grid[w][0].key.slice(5, 7)
    if (w === 0 || month !== grid[w - 1][0].key.slice(5, 7)) {
      const label = new Date(grid[w][0].key).toLocaleDateString('en-US', { month: 'short' })
      labels.push({ weekIndex: w, label })
    }
  }
  return labels
}

/* ── Heatmap ─────────────────────────────────────────────── */
function Heatmap({ repos }) {
  const [hovered, setHovered] = useState(null)

  const grid        = useMemo(() => buildGrid(repos),        [repos])
  const monthLabels = useMemo(() => buildMonthLabels(grid),  [grid])

  return (
    <div
      className="p-6 rounded-xl"
      style={{ background: '#161b22', border: '1px solid #30363d' }}
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-1">
        <h3
          className="flex items-center gap-2 text-sm font-semibold"
          style={{ color: '#e6edf3' }}
        >
          <span style={{ color: '#8b949e', display: 'flex' }}><ClockIcon /></span>
          Activity Overview
        </h3>
        <span className="ml-auto text-xs" style={{ color: '#8b949e' }}>
          Last 52 weeks
        </span>
      </div>

      {/* Tooltip line */}
      <div className="h-4 mb-3 text-xs" style={{ color: '#8b949e' }}>
        {hovered
          ? `${hovered.key} — ${hovered.level === 0 ? 'No recorded activity' : `Activity level ${hovered.level} / 4`}`
          : 'Hover a cell for details'}
      </div>

      {/* Scrollable grid */}
      <div className="pb-2 overflow-x-auto">
        <div className="relative" style={{ minWidth: 700 }}>

          {/* Month labels */}
          <div className="relative flex mb-1" style={{ height: 16 }}>
            {monthLabels.map(({ weekIndex, label }) => (
              <div
                key={label + weekIndex}
                className="absolute text-xs"
                style={{ left: weekIndex * 13, color: '#8b949e', fontSize: 10 }}
              >
                {label}
              </div>
            ))}
          </div>

          {/* Cell grid */}
          <div className="flex gap-0.5">
            {grid.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-0.5">
                {week.map((day) => (
                  <div
                    key={day.key}
                    className="rounded-sm contrib-cell"
                    onMouseEnter={() => setHovered(day)}
                    onMouseLeave={() => setHovered(null)}
                    style={{
                      width:      11,
                      height:     11,
                      background: CONTRIB_LEVELS[day.level],
                    }}
                  />
                ))}
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex items-center justify-end gap-1 mt-2">
            <span className="mr-1 text-xs" style={{ color: '#8b949e' }}>Less</span>
            {CONTRIB_LEVELS.map((color) => (
              <div
                key={color}
                className="rounded-sm"
                style={{ width: 11, height: 11, background: color }}
              />
            ))}
            <span className="ml-1 text-xs" style={{ color: '#8b949e' }}>More</span>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Recent Activity List ────────────────────────────────── */
function RecentActivity({ repos }) {
  const sorted = useMemo(
    () => [...repos].sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at)).slice(0, 10),
    [repos],
  )

  return (
    <div
      className="p-6 rounded-xl"
      style={{ background: '#161b22', border: '1px solid #30363d' }}
    >
      <h3
        className="flex items-center gap-2 mb-4 text-sm font-semibold"
        style={{ color: '#e6edf3' }}
      >
        <span style={{ color: '#8b949e', display: 'flex' }}><RepoIcon /></span>
        Recently Active Repositories
      </h3>

      <div className="flex flex-col">
        {sorted.map((repo, idx) => (
          <div
            key={repo.id}
            className="flex flex-wrap items-center gap-3 py-3"
            style={{
              borderBottom: idx < sorted.length - 1 ? '1px solid #21262d' : 'none',
            }}
          >
            {/* Language dot */}
            <span
              className="inline-block rounded-full shrink-0"
              style={{
                width:      8,
                height:     8,
                background: getLangColor(repo.language),
              }}
            />

            {/* Name */}
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-sm font-medium truncate transition-colors duration-150"
              style={{ color: '#2f81f7' }}
              onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
              onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
            >
              {repo.name}
            </a>

            {/* Language label */}
            {repo.language && (
              <span className="text-xs shrink-0" style={{ color: '#8b949e' }}>
                {repo.language}
              </span>
            )}

            {/* Stars */}
            <span className="text-xs shrink-0" style={{ color: '#8b949e' }}>
              ⭐ {formatNumber(repo.stargazers_count)}
            </span>

            {/* Date */}
            <span className="text-xs shrink-0" style={{ color: '#8b949e' }}>
              {formatDate(repo.pushed_at)}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Main Export ─────────────────────────────────────────── */

/**
 * ContributionGraph
 * Renders the Activity tab: heatmap calendar + recent activity list.
 *
 * Props:
 *   repos  Array of GitHub repo objects
 */
export default function ContributionGraph({ repos }) {
  return (
    <div className="flex flex-col gap-4">
      <Heatmap repos={repos} />
      <RecentActivity repos={repos} />
    </div>
  )
}
