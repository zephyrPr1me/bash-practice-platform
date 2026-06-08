import type { UserProgress } from '../types';

export const getUserProgress = async (_userId: number): Promise<UserProgress> => {
  // Simulating API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        level: 3,
        xp: 450,
        streak: 5,
        lastLesson: {
          id: 'bash-lesson-3',
          title: 'File Permissions',
          description: 'Learn about chmod and chown',
          pathId: 'bash'
        },
        lastLessonProgress: 60,
        bashCompleted: 3,
        bashTotal: 10
      });
    }, 500);
  });
};
