import {
  FollowerIcon, RepoIcon, LocationIcon,
  LinkIcon, OrgIcon, TwitterIcon,
  ClockIcon, ExternalIcon, CodeIcon,
} from '../../icons'
import { formatDate, formatNumber } from '../../utils/formatters'

/* ── Small sub-components ─────────────────────────────────── */

function StatPill({ icon, value, label }) {
  return (
    <div
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs"
      style={{
        background: '#21262d',
        border:     '1px solid #30363d',
      }}
    >
      <span style={{ color: '#8b949e', display: 'flex' }}>{icon}</span>
      <span className="font-semibold" style={{ color: '#e6edf3' }}>
        {formatNumber(value)}
      </span>
      <span style={{ color: '#8b949e' }}>{label}</span>
    </div>
  )
}

function MetaItem({ icon, text, href }) {
  return (
    <div className="flex items-center gap-2 text-xs" style={{ color: '#8b949e' }}>
      <span className="flex shrink-0">{icon}</span>
      {href ? (
        <a
          href={href.startsWith('http') ? href : `https://${href}`}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors duration-150 hover:underline"
          style={{ color: '#2f81f7' }}
        >
          {text}
        </a>
      ) : (
        <span style={{ color: '#c9d1d9' }}>{text}</span>
      )}
    </div>
  )
}

/* ── Main Component ───────────────────────────────────────── */

/**
 * ProfileCard
 * Displays a GitHub user's full profile: avatar, name, bio,
 * follower/repo stats, and meta info (location, website, etc.).
 *
 * Props:
 *   user  GitHub user object
 */
export default function ProfileCard({ user }) {
  return (
    <div
      className="flex flex-col gap-5 p-6 rounded-xl"
      style={{
        background: '#161b22',
        border:     '1px solid #30363d',
      }}
    >
      {/* ── Avatar + Name ── */}
      <div className="flex items-start gap-4">
        <img
          src={user.avatar_url}
          alt={`${user.login}'s avatar`}
          className="rounded-full shrink-0 object-cover"
          width={80}
          height={80}
          style={{ border: '2px solid #30363d' }}
        />
        <div className="min-w-0">
          <h2 className="text-lg font-bold leading-tight" style={{ color: '#e6edf3' }}>
            {user.name || user.login}
          </h2>
          <p className="text-sm mt-0.5 mb-2" style={{ color: '#8b949e' }}>
            @{user.login}
          </p>
          {user.bio && (
            <p className="text-xs leading-relaxed" style={{ color: '#c9d1d9' }}>
              {user.bio}
            </p>
          )}
        </div>
      </div>

      {/* ── Stats Pills ── */}
      <div className="flex flex-wrap gap-2">
        <StatPill icon={<FollowerIcon />} value={user.followers}    label="followers"  />
        <StatPill icon={<FollowerIcon />} value={user.following}    label="following"  />
        <StatPill icon={<RepoIcon />}     value={user.public_repos} label="repos"      />
        {user.public_gists > 0 && (
          <StatPill icon={<CodeIcon />}   value={user.public_gists} label="gists"      />
        )}
      </div>

      {/* ── Meta Info ── */}
      <div className="flex flex-col gap-2">
        {user.company          && <MetaItem icon={<OrgIcon />}      text={user.company}                                  />}
        {user.location         && <MetaItem icon={<LocationIcon />} text={user.location}                                 />}
        {user.blog             && <MetaItem icon={<LinkIcon />}     text={user.blog}        href={user.blog}              />}
        {user.twitter_username && <MetaItem icon={<TwitterIcon />}  text={`@${user.twitter_username}`}                  />}
        {user.created_at       && <MetaItem icon={<ClockIcon />}    text={`Joined ${formatDate(user.created_at)}`}       />}
      </div>

      {/* ── CTA Button ── */}
      <a
        href={user.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-medium transition-all duration-200"
        style={{
          background: '#21262d',
          border:     '1px solid #30363d',
          color:      '#c9d1d9',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#2d333b'
          e.currentTarget.style.color      = '#e6edf3'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = '#21262d'
          e.currentTarget.style.color      = '#c9d1d9'
        }}
      >
        <ExternalIcon size={14} />
        View on GitHub
      </a>
    </div>
  )
}
