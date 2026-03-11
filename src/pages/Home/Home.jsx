import { useMemo } from 'react'
import { useGitHub }             from '../../hooks/useGitHub'
import { computeLangStats }      from '../../utils/langStats'

import Header               from '../../components/Header/Header'
import ProfileCard          from '../../components/ProfileCard/ProfileCard'
import LangBar              from '../../components/LangBar/LangBar'
import RepoList             from '../../components/RepoList/RepoList'
import StatsChart           from '../../components/StatsChart/StatsChart'
import ContributionGraph    from '../../components/ContributionGraph/ContributionGraph'
import { PageSkeleton }     from '../../components/Skeletons/Skeletons'
import ErrorCard            from '../../components/ErrorCard/ErrorCard'
import WelcomeScreen        from '../../components/WelcomeScreen/WelcomeScreen'
import TabBar               from './TabBar'
import Footer               from './Footer'
import { useTabs }          from './useTabs'

/* ── Sidebar ─────────────────────────────────────────────── */
function Sidebar({ user, langStats }) {
  return (
    <aside
      className="flex flex-col gap-4"
      style={{ position: 'sticky', top: 68 }}
    >
      <ProfileCard user={user} />
      {langStats.length > 0 && <LangBar stats={langStats} />}
    </aside>
  )
}

/* ── Tab Content ─────────────────────────────────────────── */
function TabContent({ activeTab, repos, langStats }) {
  if (activeTab === 'repos')    return <RepoList repos={repos} />
  if (activeTab === 'stats')    return <StatsChart repos={repos} langStats={langStats} />
  if (activeTab === 'activity') return <ContributionGraph repos={repos} />
  return null
}

/* ── Home Page ───────────────────────────────────────────── */
/**
 * Home
 * Root page component. Wires together the GitHub data hook,
 * tab state, and all child components into the final layout.
 */
export default function Home() {
  const { user, repos, loading, error, search } = useGitHub()
  const { activeTab, setActiveTab }             = useTabs('repos')

  const langStats = useMemo(() => computeLangStats(repos), [repos])

  const tabs = useMemo(() => [
    { id: 'repos',    label: `Repositories (${repos.length})` },
    { id: 'stats',    label: 'Stats & Analytics'              },
    { id: 'activity', label: 'Activity'                       },
  ], [repos.length])

  const showWelcome = !loading && !user && !error
  const showResults =  !loading && !!user

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: '#0d1117', color: '#e6edf3' }}
    >
      {/* ── Top Navigation ── */}
      <Header onSearch={search} loading={loading} />

      {/* ── Main Content ── */}
      <main className="flex-1 w-full max-w-screen-xl mx-auto px-4 py-7">

        {showWelcome && <WelcomeScreen onSearch={search} />}
        {error && !loading && <ErrorCard message={error} />}
        {loading && <PageSkeleton />}

        {showResults && (
          <div
            className="grid gap-5 items-start animate-fade-in-up"
            style={{ gridTemplateColumns: 'minmax(250px, 285px) 1fr' }}
          >
            {/* Left: sticky sidebar */}
            <Sidebar user={user} langStats={langStats} />

            {/* Right: tabs + content */}
            <section>
              <TabBar tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
              <TabContent
                activeTab={activeTab}
                repos={repos}
                langStats={langStats}
              />
            </section>
          </div>
        )}
      </main>

      {/* ── Footer ── */}
      <Footer />
    </div>
  )
}
