import { getLangColor } from '../../utils/langColors'

/**
 * LangBar
 * A proportional coloured bar showing the distribution of programming
 * languages across a user's repositories.
 *
 * Props:
 *   stats  Array<{ name, count, percentage }>
 */
export default function LangBar({ stats }) {
  if (!stats?.length) return null

  return (
    <div
      className="p-4 rounded-xl"
      style={{
        background: '#161b22',
        border:     '1px solid #30363d',
      }}
    >
      <p
        className="text-xs font-semibold uppercase tracking-wide mb-3"
        style={{ color: '#8b949e' }}
      >
        Languages
      </p>

      {/* Proportional bar */}
      <div className="flex h-2 rounded-full overflow-hidden w-full gap-px">
        {stats.slice(0, 8).map((lang) => (
          <div
            key={lang.name}
            title={`${lang.name}: ${lang.percentage}%`}
            className="transition-all duration-500"
            style={{
              flex:       lang.count,
              background: getLangColor(lang.name),
            }}
          />
        ))}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-x-3 gap-y-1.5 mt-3">
        {stats.slice(0, 6).map((lang) => (
          <div
            key={lang.name}
            className="flex items-center gap-1.5 text-xs"
            style={{ color: '#8b949e' }}
          >
            <span
              className="inline-block rounded-full shrink-0"
              style={{
                width:      8,
                height:     8,
                background: getLangColor(lang.name),
              }}
            />
            {lang.name}
          </div>
        ))}
      </div>
    </div>
  )
}
