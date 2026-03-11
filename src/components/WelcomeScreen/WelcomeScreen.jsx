import { GitHubLogo, UserIcon, RepoIcon, CodeIcon, ActivityIcon } from '../../icons'

const FEATURES = [
  { Icon: UserIcon,     label: 'Profile & Bio' },
  { Icon: RepoIcon,     label: 'Repository Cards' },
  { Icon: CodeIcon,     label: 'Language Charts' },
  { Icon: ActivityIcon, label: 'Activity Graph' },
]

const EXAMPLE_USERS = ['alikhan-devs', 'humaisali']

/**
 * WelcomeScreen
 * Shown on first load before any search is made.
 * Highlights the app's features and suggests example usernames.
 */
export default function WelcomeScreen({ onSearch }) {
  return (
    <div className="flex flex-col items-center px-4 py-20 text-center animate-fade-in">

      {/* Logo */}
      <div className="mb-5" style={{ color: '#8b949e' }}>
        <GitHubLogo size={72} />
      </div>

      {/* Heading */}
      <h1 className="mb-3 text-2xl font-bold" style={{ color: '#e6edf3' }}>
        GitHub Developer Finder
      </h1>
      <p className="max-w-md mb-10 text-sm leading-relaxed" style={{ color: '#8b949e' }}>
        Search any GitHub username to explore their full profile, repositories,
        language distribution, and activity overview — all in one place.
      </p>

      <div className="grid w-full max-w-xl grid-cols-2 gap-3 mb-10 sm:grid-cols-4">
        {FEATURES.map(({ Icon, label }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-2 px-3 py-5 rounded-xl"
            style={{ background: '#161b22', border: '1px solid #30363d' }}
          >
            <span className="text-3xl" style={{ color: '#8b949e', display: 'flex' }}>
              <Icon size={28} />
            </span>
            <span className="text-xs font-medium" style={{ color: '#8b949e' }}>
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* Example users */}
      <p className="mb-3 text-xs" style={{ color: '#8b949e' }}>
        Try searching for:
      </p>
      <div className="flex flex-wrap justify-center gap-2">
        {EXAMPLE_USERS.map((u) => (
          <button
            key={u}
            onClick={() => onSearch(u)}
            className="px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-150"
            style={{
              background: '#21262d',
              border:     '1px solid #30363d',
              color:      '#2f81f7',
              cursor:     'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background    = 'rgba(47,129,247,0.12)'
              e.currentTarget.style.borderColor   = 'rgba(47,129,247,0.4)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background    = '#21262d'
              e.currentTarget.style.borderColor   = '#30363d'
            }}
          >
            @{u}
          </button>
        ))}
      </div>
    </div>
  )
}
