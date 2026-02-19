import { useState, useEffect, useCallback } from 'react'

function parseHash(hash) {
  const h = hash.replace('#', '') || '/'
  if (h === '/' || h === '') return { page: 'landing', params: {} }
  if (h === '/dashboard') return { page: 'dashboard', params: {} }
  if (h === '/glossary') return { page: 'glossary', params: {} }
  const moduleMatch = h.match(/^\/module\/(\d+)$/)
  if (moduleMatch) return { page: 'module', params: { moduleId: parseInt(moduleMatch[1]) } }
  return { page: 'landing', params: {} }
}

export function useNavigation() {
  const [location, setLocation] = useState(() => parseHash(window.location.hash))

  useEffect(() => {
    const handleHashChange = () => {
      setLocation(parseHash(window.location.hash))
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const navigate = useCallback((page, params = {}) => {
    let hash = '#/'
    if (page === 'dashboard') hash = '#/dashboard'
    else if (page === 'glossary') hash = '#/glossary'
    else if (page === 'module' && params.moduleId) hash = `#/module/${params.moduleId}`
    else if (page === 'landing') hash = '#/'
    window.location.hash = hash
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const goToLanding = useCallback(() => navigate('landing'), [navigate])
  const goToDashboard = useCallback(() => navigate('dashboard'), [navigate])
  const goToModule = useCallback((id) => navigate('module', { moduleId: id }), [navigate])
  const goToGlossary = useCallback(() => navigate('glossary'), [navigate])

  return {
    location,
    navigate,
    goToLanding,
    goToDashboard,
    goToModule,
    goToGlossary,
    currentPage: location.page,
    currentParams: location.params,
  }
}
