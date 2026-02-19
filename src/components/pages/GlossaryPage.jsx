import React, { useState, useMemo } from 'react'
import { GLOSSARY, GLOSSARY_LETTERS } from '../../data/glossary'

const CATEGORIES = [...new Set(GLOSSARY.map(g => g.category))].sort()

export function GlossaryPage() {
  const [search, setSearch] = useState('')
  const [selectedLetter, setSelectedLetter] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState(null)

  const filtered = useMemo(() => {
    return GLOSSARY.filter(g => {
      const matchSearch = !search || g.term.toLowerCase().includes(search.toLowerCase()) || g.definition.toLowerCase().includes(search.toLowerCase())
      const matchLetter = !selectedLetter || g.letter === selectedLetter
      const matchCategory = !selectedCategory || g.category === selectedCategory
      return matchSearch && matchLetter && matchCategory
    })
  }, [search, selectedLetter, selectedCategory])

  const grouped = useMemo(() => {
    const groups = {}
    filtered.forEach(g => {
      if (!groups[g.letter]) groups[g.letter] = []
      groups[g.letter].push(g)
    })
    return groups
  }, [filtered])

  const catColors = {
    'Analyse': 'teal',
    'Actions': 'blue',
    'Crypto': 'violet',
    'DeFi': 'violet',
    'Forex': 'blue',
    'Gestion': 'orange',
    'Instrument': 'yellow',
    'Marché': 'gray',
    'Ordre': 'teal',
    'Prix': 'gray',
    'Psychologie': 'red',
    'Stratégie': 'yellow',
  }

  const catColorMap = {
    teal: 'bg-teal-500/10 text-teal-400 border-teal-500/20',
    blue: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    violet: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
    orange: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    yellow: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
    gray: 'bg-neutral-500/10 text-neutral-400 border-neutral-500/20',
    red: 'bg-red-500/10 text-red-400 border-red-500/20',
  }

  const clearFilters = () => {
    setSearch('')
    setSelectedLetter(null)
    setSelectedCategory(null)
  }

  const hasFilters = search || selectedLetter || selectedCategory

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 animate-fade-in">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-text-primary mb-1">Glossaire Trading</h1>
        <p className="text-text-secondary text-sm">{GLOSSARY.length} termes définis pour les traders débutants et intermédiaires.</p>
      </div>

      {/* Search */}
      <div className="relative mb-4">
        <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
        <input
          type="text"
          placeholder="Rechercher un terme..."
          value={search}
          onChange={e => { setSearch(e.target.value); setSelectedLetter(null) }}
          className="w-full pl-10 pr-4 py-2.5 bg-bg-secondary border border-border-default rounded-xl text-text-primary placeholder-text-muted text-sm focus:outline-none focus:border-accent-violet/50 focus:ring-1 focus:ring-accent-violet/30 transition-colors"
        />
        {hasFilters && (
          <button
            onClick={clearFilters}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-4">
        {CATEGORIES.map(cat => {
          const color = catColors[cat] || 'gray'
          const colorClass = catColorMap[color]
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
              className={`px-3 py-1 rounded-full text-xs font-mono border transition-all ${
                selectedCategory === cat ? colorClass : 'bg-bg-secondary border-border-default text-text-muted hover:border-border-strong'
              }`}
            >
              {cat}
            </button>
          )
        })}
      </div>

      {/* Letter filter */}
      <div className="flex flex-wrap gap-1 mb-6">
        {GLOSSARY_LETTERS.map(letter => (
          <button
            key={letter}
            onClick={() => setSelectedLetter(selectedLetter === letter ? null : letter)}
            className={`w-8 h-8 rounded-lg text-xs font-mono font-semibold transition-all ${
              selectedLetter === letter
                ? 'bg-accent-violet text-white'
                : 'bg-bg-secondary border border-border-default text-text-muted hover:border-border-strong hover:text-text-secondary'
            }`}
          >
            {letter}
          </button>
        ))}
      </div>

      {/* Results count */}
      <p className="text-xs text-text-muted font-mono mb-4">
        {filtered.length} terme{filtered.length !== 1 ? 's' : ''} affiché{filtered.length !== 1 ? 's' : ''}
        {hasFilters && ' (filtré)'}
      </p>

      {/* Glossary entries */}
      {Object.keys(grouped).sort().length === 0 ? (
        <div className="text-center py-12">
          <p className="text-text-muted">Aucun terme trouvé pour "{search}"</p>
          <button onClick={clearFilters} className="text-accent-violet text-sm mt-2 hover:underline">
            Effacer les filtres
          </button>
        </div>
      ) : (
        <div className="space-y-8">
          {Object.keys(grouped).sort().map(letter => (
            <div key={letter}>
              {/* Letter anchor */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl font-mono font-bold text-accent-violet/50 w-8">{letter}</span>
                <div className="flex-1 h-px bg-border-subtle" />
              </div>

              <div className="space-y-3">
                {grouped[letter].map((entry, i) => {
                  const color = catColors[entry.category] || 'gray'
                  const colorClass = catColorMap[color]
                  return (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-bg-secondary border border-border-default hover:border-border-strong transition-colors"
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h3 className="text-base font-semibold text-text-primary">{entry.term}</h3>
                        <span className={`text-xs font-mono px-2 py-0.5 rounded-full border flex-shrink-0 ${colorClass}`}>
                          {entry.category}
                        </span>
                      </div>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {search ? highlightText(entry.definition, search) : entry.definition}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function highlightText(text, query) {
  if (!query) return text
  const parts = text.split(new RegExp(`(${query})`, 'gi'))
  return parts.map((part, i) =>
    part.toLowerCase() === query.toLowerCase()
      ? <mark key={i} className="bg-accent-violet/25 text-text-primary rounded px-0.5">{part}</mark>
      : part
  )
}
