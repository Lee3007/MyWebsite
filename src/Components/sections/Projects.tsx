import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import { SectionWrapper } from '../common/SectionWrapper';
import { ProjectCard } from '../ui/ProjectCard';
import { PROJECTS_DATA } from '../../utils/constants';
import { useInView } from 'react-intersection-observer';

export const Projects: React.FC = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = PROJECTS_DATA.map(project => ({
    ...project,
    titleKey: `projects.list.${project.id}.title`,
    descriptionKey: `projects.list.${project.id}.description`,
    techKeys: t(`projects.list.${project.id}.tech`, { returnObjects: true }) as string[],
  }));

  return (
    <SectionWrapper id="projects" className="bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 text-center mb-12">
          {t('projects.title')}
        </h2>
        
        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${
            inView ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={inView ? 'animate-slide-up' : 'opacity-0'}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProjectCard
                titleKey={project.titleKey}
                descriptionKey={project.descriptionKey}
                techKeys={project.techKeys}
                image={project.image}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};