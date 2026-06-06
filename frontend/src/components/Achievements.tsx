import React from 'react';

const Achievement: React.FC<{ icon: string; title: string; desc?: string }> = ({ icon, title, desc }) => (
  <div className="flex flex-col items-center gap-2 p-4 bg-[var(--surface-muted)] rounded-3xl shadow-card border border-[var(--border)]">
    <div className="text-2xl">{icon}</div>
    <div className="text-sm font-semibold text-[var(--text-color)]">{title}</div>
    {desc && <div className="text-xs text-[var(--muted)]">{desc}</div>}
  </div>
);

const Achievements: React.FC = () => {
  return (
    <div className="mt-8">
      <h3 className="text-lg font-bold mb-3">Достижения</h3>
      <div className="grid grid-cols-2 gap-3">
        <Achievement icon="🏆" title="Первый шаг" desc="Пройден первый урок" />
        <Achievement icon="🔥" title="Серия" desc="5 дней подряд" />
      </div>
    </div>
  );
};

export default Achievements;
