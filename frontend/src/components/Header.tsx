import React from 'react';
import { Flame, Trophy } from 'lucide-react';

interface HeaderProps {
  name: string;
  photoUrl?: string;
  level: number;
  xp: number;
  streak: number;
}

const Header: React.FC<HeaderProps> = ({ name, photoUrl, level, xp, streak }) => {
  return (
    <div className="flex items-center justify-between p-4 mb-6 bg-[var(--tg-theme-bg-color)] text-[var(--tg-theme-text-color)] border-b border-[var(--tg-theme-secondary-bg-color)]">
      <div className="flex items-center gap-3">
        {photoUrl ? (
          <img src={photoUrl} alt={name} className="w-12 h-12 rounded-full border-2 border-[var(--tg-theme-button-color)]" />
        ) : (
          <div className="w-12 h-12 rounded-full bg-[var(--tg-theme-button-color)] flex items-center justify-center text-white text-xl font-bold">
            {name.charAt(0)}
          </div>
        )}
        <div>
          <h1 className="text-lg font-bold leading-tight">{name}</h1>
          <div className="flex items-center gap-2 text-sm opacity-80">
            <Trophy size={14} className="text-yellow-500" />
            <span>Level {level} • {xp} XP</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-1 bg-[var(--tg-theme-secondary-bg-color)] px-3 py-1.5 rounded-full">
        <Flame size={18} className="text-orange-500" fill="currentColor" />
        <span className="font-bold">{streak}</span>
      </div>
    </div>
  );
};

export default Header;
