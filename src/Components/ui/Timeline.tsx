import React from "react";
import { useInView } from "react-intersection-observer";

interface TimelineItemProps {
  title: string;
  subtitle: string;
  location: string;
  duration: string;
  description: string[];
  isLast?: boolean;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  subtitle,
  location,
  duration,
  description,
  isLast = false,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="relative">
      <div className="flex items-start">
        <div className="flex flex-col items-center">
          <div
            className={`w-4 h-4 bg-primary-600 rounded-full ring-4 ring-primary-100 z-10 ${
              inView ? "animate-fade-in" : "opacity-0"
            }`}
          />
          {!isLast && (
            <div className="w-0.5 h-full bg-secondary-200 absolute top-4" />
          )}
        </div>

        <div
          className={`ml-6 pb-8 w-full ${
            inView ? "animate-slide-up" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="w-full bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h3 className="text-xl font-bold text-secondary-900">{title}</h3>
              <span className="text-sm text-secondary-500 mt-1 sm:mt-0">
                {duration}
              </span>
            </div>

            <div className="text-primary-600 font-medium mb-1">{subtitle}</div>
            <div className="text-secondary-500 text-sm mb-4">{location}</div>

            <ul className="space-y-2">
              {description.map((item, index) => (
                <li
                  key={index}
                  className="text-secondary-600 text-sm flex items-center"
                >
                  <span className="text-primary-400 mr-2 flex-shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
