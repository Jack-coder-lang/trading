import React from 'react'

export function QuizQuestion({ question, questionIndex, totalQuestions, selectedAnswer, onAnswer, showFeedback }) {
  return (
    <div className="animate-fade-in">
      {/* Progress */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-mono text-text-muted">
          Question {questionIndex + 1}/{totalQuestions}
        </span>
        <div className="flex gap-1">
          {Array.from({ length: totalQuestions }).map((_, i) => (
            <span
              key={i}
              className={`w-6 h-1 rounded-full transition-colors ${
                i === questionIndex
                  ? 'bg-accent-violet'
                  : i < questionIndex
                    ? 'bg-accent-teal'
                    : 'bg-border-default'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Question */}
      <p className="text-text-primary font-medium text-base leading-relaxed mb-5">
        {question.question}
      </p>

      {/* Options */}
      <div className="space-y-2.5">
        {question.options.map((option, i) => {
          let optionClass = 'border-border-default bg-bg-secondary hover:border-border-strong hover:bg-bg-hover cursor-pointer'

          if (showFeedback && selectedAnswer !== null) {
            if (i === question.correct) {
              optionClass = 'border-accent-teal bg-teal-500/10 cursor-default'
            } else if (i === selectedAnswer && i !== question.correct) {
              optionClass = 'border-accent-red bg-red-500/10 cursor-default'
            } else {
              optionClass = 'border-border-subtle bg-bg-secondary opacity-50 cursor-default'
            }
          } else if (selectedAnswer === i) {
            optionClass = 'border-accent-violet bg-accent-violet/10 cursor-pointer'
          }

          return (
            <button
              key={i}
              onClick={() => !showFeedback && onAnswer(i)}
              disabled={showFeedback}
              className={`w-full text-left flex items-start gap-3 px-4 py-3 rounded-lg border transition-all duration-150 ${optionClass}`}
            >
              <span className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center text-xs font-mono font-semibold mt-0.5
                ${showFeedback && i === question.correct
                  ? 'border-accent-teal text-accent-teal'
                  : showFeedback && i === selectedAnswer && i !== question.correct
                    ? 'border-accent-red text-accent-red'
                    : selectedAnswer === i
                      ? 'border-accent-violet text-accent-violet'
                      : 'border-border-strong text-text-muted'
                }`}>
                {['A', 'B', 'C', 'D'][i]}
              </span>
              <span className="text-sm text-text-secondary leading-relaxed">
                {option}
              </span>
              {showFeedback && i === question.correct && (
                <svg className="ml-auto flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
              {showFeedback && i === selectedAnswer && i !== question.correct && (
                <svg className="ml-auto flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              )}
            </button>
          )
        })}
      </div>

      {/* Explanation */}
      {showFeedback && (
        <div className="mt-4 p-4 rounded-lg bg-accent-violet/8 border border-accent-violet/20 animate-slide-up">
          <p className="text-xs font-mono text-accent-violet mb-1 font-semibold">EXPLICATION</p>
          <p className="text-sm text-text-secondary leading-relaxed">{question.explanation}</p>
        </div>
      )}
    </div>
  )
}
