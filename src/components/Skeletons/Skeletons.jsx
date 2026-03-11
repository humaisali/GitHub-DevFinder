/**
 * Skeleton loader components shown while GitHub API data is loading.
 * Uses a pulsing animation to indicate in-progress fetching.
 */

/* ── Base Skeleton Block ─────────────────────────────────── */
function Block({ width = '100%', height = 14, radius = 6, className = '' }) {
  return (
    <div
      className={`animate-skeleton ${className}`}
      style={{
        width,
        height,
        borderRadius: radius,
        background:   '#30363d',
      }}
    />
  )
}

/* ── Profile Skeleton ────────────────────────────────────── */
export function ProfileSkeleton() {
  return (
    <div
      className="p-6 rounded-xl flex flex-col gap-5"
      style={{ background: '#161b22', border: '1px solid #30363d' }}
    >
      {/* Avatar + name lines */}
      <div className="flex gap-4">
        <Block width={80} height={80} radius={999} />
        <div className="flex flex-col gap-2.5 flex-1 pt-1">
          <Block width="60%" height={20} />
          <Block width="38%" height={14} />
          <Block width="80%" height={14} />
        </div>
      </div>

      {/* Stat pills */}
      <div className="flex gap-2">
        <Block width={90} height={32} radius={20} />
        <Block width={90} height={32} radius={20} />
        <Block width={80} height={32} radius={20} />
      </div>

      {/* Meta lines */}
      <div className="flex flex-col gap-2">
        <Block width="70%" height={13} />
        <Block width="55%" height={13} />
        <Block width="80%" height={13} />
      </div>

      {/* CTA button */}
      <Block width="100%" height={36} radius={8} />
    </div>
  )
}

/* ── Repo Card Skeleton ───────────────────────────────────── */
export function RepoCardSkeleton() {
  return (
    <div
      className="p-5 rounded-xl flex flex-col gap-2.5"
      style={{ background: '#161b22', border: '1px solid #30363d' }}
    >
      <Block width="55%" height={18} />
      <Block width="88%" height={13} />
      <Block width="72%" height={13} />
      <div className="flex gap-3 mt-1">
        <Block width={60} height={13} />
        <Block width={50} height={13} />
      </div>
    </div>
  )
}

/* ── Full-page Loading Layout ────────────────────────────── */
export function PageSkeleton() {
  return (
    <div
      className="grid gap-5 items-start"
      style={{ gridTemplateColumns: 'minmax(250px, 285px) 1fr' }}
    >
      {/* Sidebar */}
      <div className="flex flex-col gap-4">
        <ProfileSkeleton />
        {/* Lang bar stub */}
        <div
          className="p-4 rounded-xl"
          style={{ background: '#161b22', border: '1px solid #30363d' }}
        >
          <Block width="40%" height={12} className="mb-3" />
          <Block width="100%" height={8} radius={4} />
          <div className="flex gap-3 mt-3">
            <Block width={50} height={12} />
            <Block width={60} height={12} />
            <Block width={45} height={12} />
          </div>
        </div>
      </div>

      {/* Repo grid */}
      <div
        className="grid gap-3"
        style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))' }}
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <RepoCardSkeleton key={i} />
        ))}
      </div>
    </div>
  )
}
