import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import ContinueLearning from '../components/ContinueLearning';
import LearningPath from '../components/LearningPath';
import { getUserProgress } from '../api/userApi';
import type { TelegramUser, UserProgress } from '../types';
import { Terminal } from 'lucide-react';

const StartPage: React.FC = () => {
  const [user, setUser] = useState<TelegramUser | null>(null);
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Initialize Telegram WebApp
    const tg = window.Telegram?.WebApp;
    if (tg) {
      tg.ready();
      tg.expand();

      const tgUser = tg.initDataUnsafe?.user;
      if (tgUser) {
        setUser(tgUser);
        getUserProgress(tgUser.id).then((data) => {
          setProgress(data);
          setLoading(false);
        });
      } else {
        // Fallback for development outside Telegram
        setUser({ id: 0, first_name: 'Guest User' });
        getUserProgress(0).then((data) => {
          setProgress(data);
          setLoading(false);
        });
      }
    } else {
      // Fallback for local development
      setUser({ id: 0, first_name: 'Dev User' });
      getUserProgress(0).then((data) => {
        setProgress(data);
        setLoading(false);
      });
    }
  }, []);

  if (loading || !user || !progress) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-[var(--tg-theme-bg-color)]">
        <div className="w-12 h-12 border-4 border-[var(--tg-theme-button-color)] border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 font-medium opacity-70">Loading your progress...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--tg-theme-bg-color)] text-[var(--tg-theme-text-color)] pb-10">
      <Header
        name={user.first_name}
        photoUrl={user.photo_url}
        level={progress.level}
        xp={progress.xp}
        streak={progress.streak}
      />

      <div className="px-4 max-w-2xl mx-auto">
        <ContinueLearning
          lesson={progress.lastLesson}
          progress={progress.lastLessonProgress}
        />

        <div className="mt-8">
          <h2 className="text-xl font-extrabold mb-5 px-1">Learning Paths</h2>

          <LearningPath
            title="Bash Basics"
            icon={<Terminal className="text-green-500" size={32} />}
            description="Master the terminal: navigation, files, and permissions"
            totalLessons={progress.bashTotal}
            completedLessons={progress.bashCompleted}
            onClick={() => navigate('/path/bash')}
          />

          <LearningPath
            title="Linux Filesystem"
            icon="📁"
            description="Deep dive into the Linux directory structure"
            totalLessons={15}
            completedLessons={0}
            isLocked={true}
            onClick={() => {}}
          />

          <LearningPath
            title="Networking Essentials"
            icon="🌐"
            description="Learn about curl, ssh, and basic networking"
            totalLessons={8}
            completedLessons={0}
            isLocked={true}
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default StartPage;
