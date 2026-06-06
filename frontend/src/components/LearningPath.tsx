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
  const progressPercent = (completedLessons / totalLessons) * 100;

  return (
    <div
      onClick={isLocked ? undefined : onClick}
      className={`p-5 mb-4 rounded-2xl border transition-all duration-200 ${
        isLocked
          ? 'bg-gray-100 border-gray-200 opacity-60 cursor-not-allowed'
          : 'bg-[var(--tg-theme-bg-color)] border-[var(--tg-theme-secondary-bg-color)] cursor-pointer active:scale-[0.98] hover:shadow-md'
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
          <p className="text-sm opacity-70 leading-snug">{description}</p>
        </div>
        {!isLocked && <ChevronRight size={20} className="opacity-40" />}
      </div>

      <div className="mt-4">
        <ProgressBar progress={progressPercent} className="mb-2" />
        <div className="flex justify-between text-xs font-medium opacity-60">
          <span>{completedLessons} / {totalLessons} lessons completed</span>
          <span>{Math.round(progressPercent)}%</span>
        </div>
      </div>
    </div>
  );
};

export default LearningPath;
