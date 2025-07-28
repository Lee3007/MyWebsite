import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-secondary-300 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm">
            © {currentYear} Felipe Lee. {t('footer.rights')}.
          </p>
          <p className="text-xs mt-2">
            {t('footer.madeWith')} <span className="text-red-500">❤️</span> {t('footer.by')} Felipe Lee
          </p>
        </div>
      </div>
    </footer>
  );
};