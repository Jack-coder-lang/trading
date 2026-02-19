import { useState, useEffect, useCallback } from 'react'

const STORAGE_KEY = 'formation_trade_progress'

const defaultProgress = {
  completedModules: [],
  quizScores: {},
  startedModules: [],
  lastVisited: null,
  totalTimeSpent: 0,
}

export function useProgress() {
  const [progress, setProgress] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      return stored ? { ...defaultProgress, ...JSON.parse(stored) } : defaultProgress
    } catch {
      return defaultProgress
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
    } catch {
      // localStorage unavailable
    }
  }, [progress])

  const markModuleStarted = useCallback((moduleId) => {
    setProgress(prev => ({
      ...prev,
      startedModules: prev.startedModules.includes(moduleId)
        ? prev.startedModules
        : [...prev.startedModules, moduleId],
      lastVisited: moduleId,
    }))
  }, [])

  const markModuleComplete = useCallback((moduleId) => {
    setProgress(prev => ({
      ...prev,
      completedModules: prev.completedModules.includes(moduleId)
        ? prev.completedModules
        : [...prev.completedModules, moduleId],
      startedModules: prev.startedModules.includes(moduleId)
        ? prev.startedModules
        : [...prev.startedModules, moduleId],
    }))
  }, [])

  const saveQuizScore = useCallback((moduleId, score, total) => {
    setProgress(prev => ({
      ...prev,
      quizScores: {
        ...prev.quizScores,
        [moduleId]: { score, total, percentage: Math.round((score / total) * 100), date: new Date().toISOString() },
      },
    }))
  }, [])

  const resetProgress = useCallback(() => {
    setProgress(defaultProgress)
  }, [])

  const isModuleComplete = useCallback((moduleId) => {
    return progress.completedModules.includes(moduleId)
  }, [progress.completedModules])

  const isModuleStarted = useCallback((moduleId) => {
    return progress.startedModules.includes(moduleId)
  }, [progress.startedModules])

  const getQuizScore = useCallback((moduleId) => {
    return progress.quizScores[moduleId] || null
  }, [progress.quizScores])

  const getOverallProgress = useCallback((totalModules) => {
    return Math.round((progress.completedModules.length / totalModules) * 100)
  }, [progress.completedModules])

  return {
    progress,
    markModuleStarted,
    markModuleComplete,
    saveQuizScore,
    resetProgress,
    isModuleComplete,
    isModuleStarted,
    getQuizScore,
    getOverallProgress,
  }
}
