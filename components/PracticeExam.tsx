
import React, { useState } from 'react';
import { QUESTIONS } from '../constants';

const PracticeExam: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = QUESTIONS[currentQuestionIndex];

  const handleOptionSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
  };

  const handleCheckAnswer = () => {
    if (selectedOption === null) return;
    setIsAnswered(true);
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setIsFinished(false);
  };

  if (isFinished) {
    const percentage = Math.round((score / QUESTIONS.length) * 100);
    const passed = percentage >= 80;

    return (
      <div className="max-w-2xl mx-auto text-center animate-fadeIn py-12">
        <div className="text-8xl mb-6">{passed ? '🎉' : '📚'}</div>
        <h2 className="text-3xl font-bold text-slate-800 mb-2">
          {passed ? 'Congratulations!' : 'Keep Practicing!'}
        </h2>
        <p className="text-slate-500 mb-8">
          You scored <span className="font-bold text-slate-800">{score}</span> out of <span className="font-bold text-slate-800">{QUESTIONS.length}</span> ({percentage}%).
        </p>
        
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm mb-8">
          <div className="h-4 bg-slate-100 rounded-full overflow-hidden">
            <div 
              className={`h-full transition-all duration-1000 ${passed ? 'bg-green-500' : 'bg-amber-500'}`} 
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
          <p className="text-xs text-slate-400 mt-2">Passing score is typically 80%</p>
        </div>

        <button 
          onClick={handleRestart}
          className="bg-green-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-green-700 shadow-lg transition-colors"
        >
          Retake Exam
        </button>
      </div>
    );
  }

  const progress = ((currentQuestionIndex + 1) / QUESTIONS.length) * 100;

  return (
    <div className="max-w-2xl mx-auto animate-fadeIn">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Question {currentQuestionIndex + 1} of {QUESTIONS.length}</span>
          <h2 className="text-xl font-bold text-slate-800 mt-1">{currentQuestion.category}</h2>
        </div>
        <div className="text-right">
          <span className="text-sm font-bold text-green-600">Score: {score}</span>
        </div>
      </div>

      <div className="w-full h-1 bg-slate-200 rounded-full mb-8 overflow-hidden">
        <div className="h-full bg-green-500 transition-all duration-300" style={{ width: `${progress}%` }}></div>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
        <p className="text-xl text-slate-800 mb-8 font-medium leading-relaxed">
          {currentQuestion.question}
        </p>

        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => {
            let bgColor = 'bg-slate-50 border-slate-200 hover:border-green-400';
            let textColor = 'text-slate-700';

            if (selectedOption === index) {
              bgColor = 'bg-green-50 border-green-500';
              textColor = 'text-green-800';
            }

            if (isAnswered) {
              if (index === currentQuestion.correctAnswer) {
                bgColor = 'bg-green-100 border-green-600';
                textColor = 'text-green-800';
              } else if (selectedOption === index && index !== currentQuestion.correctAnswer) {
                bgColor = 'bg-red-50 border-red-500';
                textColor = 'text-red-800';
              } else {
                bgColor = 'bg-slate-50 border-slate-200 opacity-50';
              }
            }

            return (
              <button
                key={index}
                onClick={() => handleOptionSelect(index)}
                disabled={isAnswered}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${bgColor} ${textColor} font-medium flex items-center gap-4`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 font-bold ${
                    selectedOption === index ? 'bg-green-600 text-white border-green-600' : 'border-slate-300'
                }`}>
                  {String.fromCharCode(65 + index)}
                </div>
                {option}
              </button>
            );
          })}
        </div>

        {isAnswered && (
          <div className="mt-8 animate-fadeIn">
            <div className={`p-4 rounded-xl mb-6 ${selectedOption === currentQuestion.correctAnswer ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
              <p className="font-bold text-sm mb-1">
                {selectedOption === currentQuestion.correctAnswer ? '✓ Correct!' : '✗ Incorrect'}
              </p>
              <p className="text-sm">{currentQuestion.explanation}</p>
            </div>
            <button 
              onClick={handleNext}
              className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-slate-800 transition-colors shadow-lg"
            >
              {currentQuestionIndex === QUESTIONS.length - 1 ? 'Finish Exam' : 'Next Question'}
            </button>
          </div>
        )}

        {!isAnswered && (
          <button 
            onClick={handleCheckAnswer}
            disabled={selectedOption === null}
            className={`w-full mt-8 py-3 rounded-xl font-bold shadow-lg transition-all ${
              selectedOption === null 
                ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
                : 'bg-green-600 text-white hover:bg-green-700'
            }`}
          >
            Check Answer
          </button>
        )}
      </div>
    </div>
  );
};

export default PracticeExam;
