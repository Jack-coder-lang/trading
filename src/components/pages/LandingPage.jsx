import React from 'react'
import { useApp } from '../../context/AppContext'
import { Button } from '../ui/Button'
import { CandlestickChart } from '../illustrations/CandlestickChart'

export function LandingPage() {
  const { goToDashboard, goToModule, modules, getOverallProgress, totalModules } = useApp()
  const overallPct = getOverallProgress(totalModules)
  const hasProgress = overallPct > 0

  const features = [
    { icon: '📊', title: '12 Modules complets', desc: 'Du débutant absolu au trader structuré. Forex, Actions, Crypto.' },
    { icon: '🧪', title: 'Quiz interactifs', desc: 'Testez vos connaissances avec des quiz à la fin de chaque module.' },
    { icon: '📈', title: 'Suivi de progression', desc: 'Votre avancement est sauvegardé automatiquement dans votre navigateur.' },
    { icon: '📖', title: 'Glossaire complet', desc: 'Plus de 60 termes de trading définis clairement pour les débutants.' },
    { icon: '🎨', title: 'Illustrations SVG', desc: 'Chandeliers, structures de marché, cycles psychologiques... tout est illustré.' },
    { icon: '🆓', title: '100% gratuit', desc: 'Aucun compte requis. Aucune donnée collectée. Apprenez à votre rythme.' },
  ]

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent-violet/8 rounded-full blur-3xl" />
          <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-accent-blue/6 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 py-20 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-violet/30 bg-accent-violet/10 text-accent-violet text-xs font-mono mb-8">
            <span className="w-2 h-2 rounded-full bg-accent-teal animate-pulse" />
            Formation complète · Débutants · Gratuit
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-text-primary leading-tight mb-6">
            Apprenez à{' '}
            <span className="text-gradient">trader</span>
            <br />
            <span className="text-text-secondary text-4xl md:text-5xl">comme un professionnel</span>
          </h1>

          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
            12 modules progressifs couvrant le Forex, les actions et les cryptomonnaies.
            Quiz interactifs, illustrations détaillées et suivi de progression inclus.
          </p>

          {/* CTA */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {hasProgress ? (
              <Button variant="primary" size="lg" onClick={goToDashboard}>
                Reprendre la formation
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Button>
            ) : (
              <Button variant="primary" size="lg" onClick={() => goToModule(1)}>
                Commencer la formation
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Button>
            )}
            <Button variant="secondary" size="lg" onClick={goToDashboard}>
              Voir les modules
            </Button>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center gap-8 mt-12 flex-wrap">
            {[
              { v: '12', l: 'Modules' },
              { v: '70+', l: 'Questions Quiz' },
              { v: '60+', l: 'Termes Glossaire' },
              { v: '0€', l: 'Gratuit' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl font-mono font-bold text-text-primary">{s.v}</p>
                <p className="text-xs text-text-muted">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chart preview */}
      <section className="max-w-4xl mx-auto px-6 mb-16">
        <div className="glass rounded-2xl p-6 border border-border-default">
          <div className="flex items-center justify-between mb-4">
            <div className="flex gap-2">
              {['M', '5M', '15M', '1H', '4H', 'D'].map((tf, i) => (
                <span key={i} className={`px-2 py-1 rounded text-xs font-mono cursor-pointer ${i === 4 ? 'bg-accent-violet text-white' : 'text-text-muted hover:text-text-secondary'}`}>{tf}</span>
              ))}
            </div>
            <div className="flex gap-2">
              <span className="text-xs font-mono text-accent-teal">BTC +12.4%</span>
              <span className="text-xs font-mono text-text-muted">4H · Binance</span>
            </div>
          </div>
          <CandlestickChart width={700} height={200} />
        </div>
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold text-text-primary text-center mb-2">Tout ce dont vous avez besoin</h2>
        <p className="text-text-secondary text-center mb-10">Une formation structurée, progressive et complète.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <div key={i} className="p-5 rounded-xl bg-bg-secondary border border-border-default hover:border-border-strong transition-all duration-200 hover:shadow-[0_0_15px_rgba(124,58,237,0.1)]">
              <span className="text-2xl block mb-3">{f.icon}</span>
              <h3 className="text-sm font-semibold text-text-primary mb-1">{f.title}</h3>
              <p className="text-xs text-text-muted leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Module list preview */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-text-primary text-center mb-2">Programme de formation</h2>
        <p className="text-text-secondary text-center mb-10">12 modules pour aller de zéro à un plan de trading complet.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {modules.map((mod) => (
            <button
              key={mod.id}
              onClick={() => goToModule(mod.id)}
              className="flex items-center gap-3 p-4 rounded-xl bg-bg-secondary border border-border-default text-left hover:border-accent-violet/40 hover:shadow-[0_0_12px_rgba(124,58,237,0.12)] transition-all duration-200"
            >
              <span className="text-xl flex-shrink-0">{mod.icon}</span>
              <div className="min-w-0">
                <p className="text-xs text-text-muted font-mono">Module {String(mod.id).padStart(2, '0')}</p>
                <p className="text-sm text-text-primary font-medium truncate">{mod.title}</p>
                <p className="text-xs text-text-muted">{mod.duration} · {mod.level}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="primary" size="lg" onClick={hasProgress ? goToDashboard : () => goToModule(1)}>
            {hasProgress ? 'Reprendre la formation' : 'Commencer maintenant — Gratuit'}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Button>
        </div>
      </section>
    </div>
  )
}
