import React from 'react';

interface ProgressBarProps {
  progress: number;
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, className = "" }) => {
  return (
    <div className={`w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 ${className}`}>
      <div
        className="bg-green-500 h-2.5 rounded-full transition-all duration-500 ease-out"
        style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
