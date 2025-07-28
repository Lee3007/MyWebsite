import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import { SectionWrapper } from '../common/SectionWrapper';
import { CONTACT_LINKS } from '../../utils/constants';
import { useInView } from 'react-intersection-observer';

interface ContactButtonProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  color: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({ href, icon, label, color }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center gap-3 px-6 py-4 rounded-xl ${color} text-white font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
    >
      {icon}
      <span>{label}</span>
    </a>
  );
};

export const Contact: React.FC = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactMethods = [
    {
      href: `mailto:${CONTACT_LINKS.email}`,
      label: t('contact.email'),
      color: 'bg-accent-600 hover:bg-accent-700',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      ),
    },
    {
      href: CONTACT_LINKS.linkedin,
      label: t('contact.linkedin'),
      color: 'bg-blue-600 hover:bg-blue-700',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      href: CONTACT_LINKS.github,
      label: t('contact.github'),
      color: 'bg-secondary-900 hover:bg-secondary-800',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
    },
  ];

  return (
    <SectionWrapper id="contact" className="bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
          {t('contact.title')}
        </h2>
        
        <p className="text-lg text-secondary-600 mb-12 max-w-2xl mx-auto">
          {t('contact.description')}
        </p>
        
        <div
          ref={ref}
          className={`grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto ${
            inView ? 'animate-slide-up' : 'opacity-0 translate-y-4'
          }`}
        >
          {contactMethods.map((method, index) => (
            <div
              key={method.label}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ContactButton {...method} />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};