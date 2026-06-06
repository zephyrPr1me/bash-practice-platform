import React from 'react';
import { Flame, Trophy, Moon, SunMedium } from 'lucide-react';
import { useTheme } from '../theme/ThemeProvider';

interface HeaderProps {
  name: string;
  photoUrl?: string;
  level: number;
  xp: number;
  streak: number;
}

const Header: React.FC<HeaderProps> = ({ name, photoUrl, level, xp, streak }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-5 mb-6 bg-[var(--card-bg)] text-[var(--text-color)] border border-[var(--border)] rounded-3xl shadow-card">
      <div className="flex items-center gap-4">
        {photoUrl ? (
          <img src={photoUrl} alt={name} className="w-14 h-14 rounded-full border-2 border-[var(--accent)] object-cover" />
        ) : (
          <div className="w-14 h-14 rounded-full bg-[var(--accent)] flex items-center justify-center text-[var(--accent-foreground)] text-xl font-bold">
            {name.charAt(0)}
          </div>
        )}
        <div>
          <h1 className="text-xl font-bold leading-tight">{name}</h1>
          <div className="flex items-center gap-3 text-sm text-[var(--muted)] mt-1">
            <span className="inline-flex items-center gap-1">
              <Trophy size={14} className="text-yellow-400" />
              Level {level}
            </span>
            <span>•</span>
            <span>{xp} XP</span>
          </div>
        </div>
      </div>

      <div className="mt-4 sm:mt-0 flex items-center gap-3">
        <div className="flex items-center gap-2 bg-[var(--surface-muted)] px-3 py-1.5 rounded-full text-sm text-[var(--text-color)]">
          <Flame size={18} className="text-orange-500" fill="currentColor" />
          <span className="font-semibold">{streak}</span>
        </div>
        <button
          type="button"
          onClick={toggleTheme}
          className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-[var(--surface-muted)] text-[var(--text-color)] transition hover:bg-[var(--surface-hover)]"
          aria-label="Переключить тему"
        >
          {theme === 'dark' ? <SunMedium size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </div>
  );
};

export default Header;
