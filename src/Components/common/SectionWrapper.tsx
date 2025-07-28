import React from 'react';
import { clsx } from 'clsx';

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  id,
  children,
  className,
  containerClassName,
}) => {
  return (
    <section
      id={id}
      className={clsx('py-16 md:py-20 lg:py-24', className)}
    >
      <div
        className={clsx(
          'container mx-auto px-4 sm:px-6 lg:px-8',
          containerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
};