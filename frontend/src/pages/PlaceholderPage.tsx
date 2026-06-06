import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface PlaceholderPageProps {
  title: string;
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ title }) => {
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id || params.pathId;

  return (
    <div className="flex flex-col min-h-screen bg-[var(--tg-theme-bg-color)] text-[var(--tg-theme-text-color)] p-6">
      <button
        onClick={() => navigate('/')}
        className="flex items-center gap-2 mb-8 opacity-70 hover:opacity-100 transition-opacity"
      >
        <ArrowLeft size={20} />
        <span>Back to Home</span>
      </button>

      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <div className="w-24 h-24 bg-[var(--tg-theme-secondary-bg-color)] rounded-full flex items-center justify-center mb-6">
          <span className="text-4xl">🚧</span>
        </div>
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        {id && <p className="text-xl mb-6 opacity-60">ID: <span className="font-mono">{id}</span></p>}
        <p className="max-w-md opacity-70 leading-relaxed">
          This page is currently under construction. We're working hard to bring you the best learning experience!
        </p>

        <button
          onClick={() => navigate('/')}
          className="mt-10 px-8 py-3 bg-[var(--tg-theme-button-color)] text-[var(--tg-theme-button-text-color)] rounded-xl font-bold"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default PlaceholderPage;
