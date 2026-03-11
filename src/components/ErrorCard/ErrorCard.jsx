/**
 * ErrorCard
 * Displays a styled error message when the GitHub API request fails.
 *
 * Props:
 *   message  string  – human-readable error description
 */
export default function ErrorCard({ message }) {
  return (
    <div className="max-w-lg mx-auto mt-16 animate-fade-in">
      <div
        className="flex flex-col items-center gap-3 p-8 rounded-xl text-center"
        style={{
          background: 'rgba(248,81,73,0.08)',
          border:     '1px solid rgba(248,81,73,0.3)',
        }}
      >
        <span className="text-4xl select-none">⚠️</span>
        <p className="text-sm font-semibold" style={{ color: '#ff7b72' }}>
          Something went wrong
        </p>
        <p className="text-xs leading-relaxed" style={{ color: '#8b949e' }}>
          {message}
        </p>
      </div>
    </div>
  )
}
