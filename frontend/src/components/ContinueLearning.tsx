import React from 'react';
import { Play } from 'lucide-react';
import type { Lesson } from '../types';
import ProgressBar from './ProgressBar';
import { useNavigate } from 'react-router-dom';

interface ContinueLearningProps {
  lesson?: Lesson;
  progress?: number;
}

const ContinueLearning: React.FC<ContinueLearningProps> = ({ lesson, progress = 0 }) => {
  const navigate = useNavigate();

  if (!lesson) {
    return (
      <div className="p-6 mb-8 text-center bg-[var(--card-bg)] border border-[var(--border)] rounded-3xl shadow-card">
        <h2 className="mb-4 text-xl font-bold">Начни с первого урока! 🚀</h2>
        <button
          onClick={() => navigate('/lesson/bash-1')}
          className="w-full py-3 px-6 bg-[var(--accent)] text-[var(--accent-foreground)] rounded-xl font-bold text-lg hover:opacity-90 transition-opacity"
        >
          Начать первый урок
        </button>
      </div>
    );
  }

  return (
    <div className="p-5 mb-8 bg-[var(--card-bg)] rounded-3xl shadow-card border border-[var(--border)]">
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider opacity-60">Продолжить обучение</span>
          <h2 className="text-xl font-bold">{lesson.title}</h2>
        </div>
        <button
          onClick={() => navigate(`/lesson/${lesson.id}`)}
          className="p-3 bg-[var(--tg-theme-button-color)] text-[var(--tg-theme-button-text-color)] rounded-full hover:scale-105 transition-transform"
        >
          <Play size={20} fill="currentColor" />
        </button>
      </div>

      <div className="mt-2">
        <div className="flex justify-between text-sm mb-1.5 opacity-80">
          <span>Прогресс</span>
          <span>{progress}%</span>
        </div>
        <ProgressBar progress={progress} />
      </div>
    </div>
  );
};

export default ContinueLearning;
