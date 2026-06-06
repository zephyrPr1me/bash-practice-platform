import React, { createContext, useContext, useEffect, useState } from 'react';

export type ThemeMode = 'light' | 'dark' | 'system';

interface ThemeContextType {
  mode: ThemeMode;
  isDark: boolean;
  toggleTheme: () => void;
  setTheme: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<ThemeMode>(() => {
    // Попытаемся получить сохранённую тему из localStorage
    const saved = localStorage.getItem('theme-mode') as ThemeMode | null;
    return saved || 'system';
  });

  const [isDark, setIsDark] = useState(false);

  // Инициализируем тему при монтировании
  useEffect(() => {
    const updateTheme = () => {
      let shouldBeDark = false;

      if (mode === 'system') {
        // Пытаемся определить тему из Telegram WebApp
        const tg = window.Telegram?.WebApp;
        if (tg) {
          // Используем isDarkMode, если доступен
          shouldBeDark = tg.colorScheme === 'dark' || tg.isDarkMode === true;
        } else {
          // Fallback на системные настройки браузера
          shouldBeDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
      } else {
        shouldBeDark = mode === 'dark';
      }

      setIsDark(shouldBeDark);
      document.documentElement.classList.toggle('dark', shouldBeDark);
      document.documentElement.style.colorScheme = shouldBeDark ? 'dark' : 'light';
    };

    updateTheme();

    // Слушаем изменения системной темы
    if (mode === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = () => updateTheme();
      
      mediaQuery.addEventListener('change', handleChange);
      
      // Слушаем события Telegram WebApp
      const handleTelegramThemeChange = () => updateTheme();
      window.addEventListener('themechanged', handleTelegramThemeChange);

      return () => {
        mediaQuery.removeEventListener('change', handleChange);
        window.removeEventListener('themechanged', handleTelegramThemeChange);
      };
    }
  }, [mode]);

  const toggleTheme = () => {
    if (mode === 'system') {
      setMode(isDark ? 'light' : 'dark');
    } else {
      setMode(mode === 'dark' ? 'light' : 'dark');
    }
  };

  const setTheme = (newMode: ThemeMode) => {
    setMode(newMode);
    localStorage.setItem('theme-mode', newMode);
  };

  return (
    <ThemeContext.Provider value={{ mode, isDark, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
