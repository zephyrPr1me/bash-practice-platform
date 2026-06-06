export interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code?: string;
  is_premium?: boolean;
  photo_url?: string;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  pathId: string;
}

export interface UserProgress {
  level: number;
  xp: number;
  streak: number;
  lastLesson?: Lesson;
  lastLessonProgress?: number; // percentage or completed tasks
  bashCompleted: number;
  bashTotal: number;
}

declare global {
  interface Window {
    Telegram: {
      WebApp: {
        ready: () => void;
        expand: () => void;
        initDataUnsafe: {
          user?: TelegramUser;
        };
        themeParams: {
          bg_color?: string;
          text_color?: string;
          hint_color?: string;
          link_color?: string;
          button_color?: string;
          button_text_color?: string;
          secondary_bg_color?: string;
        };
      };
    };
  }
}
