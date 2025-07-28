import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';

export const LanguageSwitcher: React.FC = () => {
  const { currentLanguage, changeLanguage } = useTranslation();

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => changeLanguage('en')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
          currentLanguage === 'en'
            ? 'bg-primary-600 text-white'
            : 'text-secondary-600 hover:text-secondary-800 hover:bg-secondary-100'
        }`}
        aria-label="Change language to English"
      >
        EN
      </button>
      <span className="text-secondary-400">|</span>
      <button
        onClick={() => changeLanguage('pt')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
          currentLanguage === 'pt'
            ? 'bg-primary-600 text-white'
            : 'text-secondary-600 hover:text-secondary-800 hover:bg-secondary-100'
        }`}
        aria-label="Mudar idioma para Português"
      >
        PT
      </button>
    </div>
  );
};