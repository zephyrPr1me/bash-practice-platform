import React from 'react';
import { Lock, ChevronRight } from 'lucide-react';
import ProgressBar from './ProgressBar';

interface LearningPathProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  totalLessons: number;
  completedLessons: number;
  isLocked?: boolean;
  onClick: () => void;
}

const LearningPath: React.FC<LearningPathProps> = ({
  title,
  icon,
  description,
  totalLessons,
  completedLessons,
  isLocked = false,
  onClick
}) => {
  const progressPercent = totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;

  return (
    <div
      onClick={isLocked ? undefined : onClick}
      className={`p-5 mb-4 rounded-3xl border transition-all duration-200 ${
        isLocked
          ? 'bg-[var(--surface-muted)] border-[var(--border)] opacity-80 cursor-not-allowed'
          : 'bg-[var(--card-bg)] border-[var(--border)] cursor-pointer active:scale-[0.98] shadow-card'
      }`}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="text-4xl">
          {icon}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="font-bold text-lg">{title}</h3>
            {isLocked && <Lock size={16} className="text-gray-500" />}
          </div>
          <p className="text-sm text-[var(--muted)] leading-snug">{description}</p>
        </div>
        {!isLocked && <ChevronRight size={20} className="text-[var(--muted)]" />}
      </div>

      <div className="mt-4">
        <ProgressBar progress={progressPercent} className="mb-2" />
        <div className="flex justify-between text-xs font-medium text-[var(--muted)] items-center">
          <span>{completedLessons} / {totalLessons} уроков</span>
          <div className="flex items-center gap-3">
            <span>{Math.round(progressPercent)}%</span>
            {!isLocked && (
              <button
                onClick={(e) => { e.stopPropagation(); onClick(); }}
                className="text-sm bg-[var(--accent)] text-[var(--accent-foreground)] px-3 py-1 rounded-full"
              >
                {completedLessons > 0 ? 'Продолжить' : 'Начать'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPath;
