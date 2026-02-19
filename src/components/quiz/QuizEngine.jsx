import React, { useState } from 'react'
import { QuizQuestion } from './QuizQuestion'
import { QuizResult } from './QuizResult'
import { Button } from '../ui/Button'
import { useApp } from '../../context/AppContext'

export function QuizEngine({ module, onClose }) {
  const { saveQuizScore, markModuleComplete, goToModule, modules } = useApp()
  const [currentQ, setCurrentQ] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [answers, setAnswers] = useState([])
  const [finished, setFinished] = useState(false)

  const questions = module.quiz
  const score = answers.filter((a, i) => a === questions[i].correct).length

  const handleAnswer = (answerIndex) => {
    setSelectedAnswer(answerIndex)
    setShowFeedback(true)
  }

  const handleNext = () => {
    const newAnswers = [...answers, selectedAnswer]
    setAnswers(newAnswers)

    if (currentQ + 1 >= questions.length) {
      const finalScore = newAnswers.filter((a, i) => a === questions[i].correct).length
      saveQuizScore(module.id, finalScore, questions.length)
      if (finalScore / questions.length >= 0.6) {
        markModuleComplete(module.id)
      }
      setFinished(true)
    } else {
      setCurrentQ(currentQ + 1)
      setSelectedAnswer(null)
      setShowFeedback(false)
    }
  }

  const handleRetry = () => {
    setCurrentQ(0)
    setSelectedAnswer(null)
    setShowFeedback(false)
    setAnswers([])
    setFinished(false)
  }

  const handleContinue = () => {
    const nextModule = modules.find(m => m.id === module.id + 1)
    if (nextModule && score / questions.length >= 0.6) {
      goToModule(nextModule.id)
    }
    onClose()
  }

  if (finished) {
    return (
      <QuizResult
        score={score}
        total={questions.length}
        moduleTitle={module.title}
        onRetry={handleRetry}
        onContinue={handleContinue}
      />
    )
  }

  return (
    <div>
      <QuizQuestion
        question={questions[currentQ]}
        questionIndex={currentQ}
        totalQuestions={questions.length}
        selectedAnswer={selectedAnswer}
        onAnswer={handleAnswer}
        showFeedback={showFeedback}
      />
      {showFeedback && (
        <div className="mt-5 flex justify-end animate-slide-up">
          <Button variant="primary" onClick={handleNext}>
            {currentQ + 1 >= questions.length ? 'Voir les résultats' : 'Question suivante'}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Button>
        </div>
      )}
    </div>
  )
}
