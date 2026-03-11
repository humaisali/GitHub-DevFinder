import {
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
} from 'recharts'
import {
  CodeIcon,
  StarIcon,
  ChartIcon,
  ForkIcon,
  WatcherIcon,
  TagIcon,
  GitBranchIcon,
} from '../../icons'
import { getLangColor } from '../../utils/langColors'
import { formatNumber } from '../../utils/formatters'

/* ── Custom Recharts Tooltip ────────────────────────────── */
function LangTooltip({ active, payload }) {
  if (!active || !payload?.length) return null
  const { name, value } = payload[0].payload
  return (
    <div
      className="px-3 py-2 rounded-lg text-xs"
      style={{ background: '#21262d', border: '1px solid #30363d' }}
    >
      <div className="flex items-center gap-2">
        <span
          className="inline-block rounded-full"
          style={{ width: 8, height: 8, background: getLangColor(name) }}
        />
        <span style={{ color: '#e6edf3' }}>{name}</span>
        <span style={{ color: '#8b949e' }}>{value}%</span>
      </div>
    </div>
  )
}

function StarsTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null
  return (
    <div
      className="px-3 py-2 rounded-lg text-xs"
      style={{ background: '#21262d', border: '1px solid #30363d' }}
    >
      <p style={{ color: '#e6edf3' }} className="font-medium mb-1">{label}</p>
      <div className="flex items-center gap-1.5">
        <span style={{ color: '#e3b341' }}>⭐</span>
        <span style={{ color: '#8b949e' }}>{formatNumber(payload[0].value)} stars</span>
      </div>
    </div>
  )
}

/* ── Language Pie ────────────────────────────────────────── */
function LanguagePieChart({ stats }) {
  const data = stats.map((l) => ({ name: l.name, value: l.percentage }))

  return (
    <div
      className="p-6 rounded-xl"
      style={{ background: '#161b22', border: '1px solid #30363d' }}
    >
      <h3
        className="flex items-center gap-2 text-sm font-semibold mb-5"
        style={{ color: '#e6edf3' }}
      >
        <span style={{ color: '#8b949e', display: 'flex' }}><CodeIcon /></span>
        Language Statistics
      </h3>

      <div className="grid grid-cols-2 gap-6 items-center">
        {/* Donut chart */}
        <ResponsiveContainer width="100%" height={180}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={78}
              dataKey="value"
              paddingAngle={2}
              stroke="none"
            >
              {data.map((entry) => (
                <Cell key={entry.name} fill={getLangColor(entry.name)} />
              ))}
            </Pie>
            <Tooltip content={<LangTooltip />} />
          </PieChart>
        </ResponsiveContainer>

        {/* Legend */}
        <div className="flex flex-col gap-2">
          {data.map((lang) => (
            <div key={lang.name} className="flex items-center gap-2 text-xs">
              <span
                className="inline-block rounded-full shrink-0"
                style={{ width: 10, height: 10, background: getLangColor(lang.name) }}
              />
              <span className="flex-1 truncate" style={{ color: '#c9d1d9' }}>
                {lang.name}
              </span>
              <span className="font-semibold" style={{ color: '#8b949e' }}>
                {lang.value}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ── Stars Bar ───────────────────────────────────────────── */
function StarsBarChart({ repos }) {
  const data = [...repos]
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 6)
    .map((r) => ({
      name:  r.name.length > 14 ? `${r.name.slice(0, 12)}…` : r.name,
      stars: r.stargazers_count,
    }))

  return (
    <div
      className="p-6 rounded-xl"
      style={{ background: '#161b22', border: '1px solid #30363d' }}
    >
      <h3
        className="flex items-center gap-2 text-sm font-semibold mb-5"
        style={{ color: '#e6edf3' }}
      >
        <span style={{ color: '#8b949e', display: 'flex' }}><StarIcon /></span>
        Top Repositories by Stars
      </h3>

      <ResponsiveContainer width="100%" height={180}>
        <BarChart data={data} barSize={24}>
          <CartesianGrid strokeDasharray="3 3" stroke="#30363d" vertical={false} />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 11, fill: '#8b949e' }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 11, fill: '#8b949e' }}
            axisLine={false}
            tickLine={false}
            width={32}
          />
          <Tooltip content={<StarsTooltip />} />
          <Bar dataKey="stars" fill="#ffa657" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

/* ── Overview Numbers ────────────────────────────────────── */
function OverviewGrid({ repos, langCount }) {
  const totalStars   = repos.reduce((s, r) => s + r.stargazers_count, 0)
  const totalForks   = repos.reduce((s, r) => s + r.forks_count,      0)
  const totalWatchers= repos.reduce((s, r) => s + (r.watchers_count ?? 0), 0)
  const withTopics   = repos.filter((r) => r.topics?.length > 0).length
  const forked       = repos.filter((r) => r.fork).length

  const tiles = [
    { Icon: StarIcon,      value: totalStars,    label: 'Total Stars'    },
    { Icon: ForkIcon,      value: totalForks,    label: 'Total Forks'    },
    { Icon: WatcherIcon,   value: totalWatchers, label: 'Watchers'       },
    { Icon: CodeIcon,      value: langCount,     label: 'Languages'      },
    { Icon: TagIcon,       value: withTopics,    label: 'With Topics'    },
    { Icon: GitBranchIcon, value: forked,        label: 'Forked Repos'   },
  ]

  return (
    <div
      className="p-6 rounded-xl"
      style={{ background: '#161b22', border: '1px solid #30363d' }}
    >
      <h3
        className="flex items-center gap-2 text-sm font-semibold mb-5"
        style={{ color: '#e6edf3' }}
      >
        <span style={{ color: '#8b949e', display: 'flex' }}><ChartIcon /></span>
        Overview
      </h3>

      <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))' }}>
        {tiles.map(({ Icon, value, label }) => (
          <div
            key={label}
            className="flex flex-col items-center py-4 px-3 rounded-xl text-center"
            style={{ background: '#21262d', border: '1px solid #30363d' }}
          >
            <span className="mb-1.5" style={{ color: '#8b949e', display: 'flex' }}>
              <Icon size={20} />
            </span>
            <span className="text-lg font-bold" style={{ color: '#e6edf3' }}>
              {formatNumber(value)}
            </span>
            <span className="text-xs mt-0.5" style={{ color: '#8b949e' }}>
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Main Export ─────────────────────────────────────────── */

/**
 * StatsChart
 * Renders the full Stats tab: language donut, stars bar, and overview tiles.
 *
 * Props:
 *   repos      Array of GitHub repo objects
 *   langStats  Array<{ name, count, percentage }>
 */
export default function StatsChart({ repos, langStats }) {
  const hasStars = repos.some((r) => r.stargazers_count > 0)

  return (
    <div className="flex flex-col gap-4">
      {langStats.length > 0 && <LanguagePieChart stats={langStats} />}
      {hasStars            && <StarsBarChart repos={repos} />}
      <OverviewGrid repos={repos} langCount={langStats.length} />
    </div>
  )
}
