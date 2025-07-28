import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import { SectionWrapper } from '../common/SectionWrapper';
import { TimelineItem } from '../ui/Timeline';

export const Experience: React.FC = () => {
  const { t } = useTranslation();

  const experiences = [
    {
      id: 'shaw',
      titleKey: 'experience.companies.shaw.name',
      roleKey: 'experience.companies.shaw.role',
      locationKey: 'experience.companies.shaw.location',
      durationKey: 'experience.companies.shaw.duration',
      descriptionKeys: [
        'experience.companies.shaw.description.0',
        'experience.companies.shaw.description.1',
        'experience.companies.shaw.description.2',
        'experience.companies.shaw.description.3',
        'experience.companies.shaw.description.4',
      ],
    },
    {
      id: 'driva',
      titleKey: 'experience.companies.driva.name',
      roleKey: 'experience.companies.driva.role',
      locationKey: 'experience.companies.driva.location',
      durationKey: 'experience.companies.driva.duration',
      descriptionKeys: [
        'experience.companies.driva.description.0',
        'experience.companies.driva.description.1',
        'experience.companies.driva.description.2',
        'experience.companies.driva.description.3',
        'experience.companies.driva.description.4',
      ],
    },
    {
      id: 'peteco',
      titleKey: 'experience.companies.peteco.name',
      roleKey: 'experience.companies.peteco.role',
      locationKey: 'experience.companies.peteco.location',
      durationKey: 'experience.companies.peteco.duration',
      descriptionKeys: [
        'experience.companies.peteco.description.0',
        'experience.companies.peteco.description.1',
      ],
    },
  ];

  return (
    <SectionWrapper id="experience" className="bg-secondary-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 text-center mb-12">
          {t('experience.title')}
        </h2>
        
        <div className="relative">
          {experiences.map((exp, index) => (
            <TimelineItem
              key={exp.id}
              title={t(exp.titleKey)}
              subtitle={t(exp.roleKey)}
              location={t(exp.locationKey)}
              duration={t(exp.durationKey)}
              description={exp.descriptionKeys.map(key => t(key))}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};