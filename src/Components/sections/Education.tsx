import React from "react";
import { useTranslation } from "../../hooks/useTranslation";
import { SectionWrapper } from "../common/SectionWrapper";
import { useInView } from "react-intersection-observer";

export const Education: React.FC = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <SectionWrapper id="education" className="bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 text-center mb-12">
          {t("education.title")}
        </h2>

        <div
          ref={ref}
          className={`bg-gradient-to-br from-primary-50 to-secondary-50 p-8 rounded-xl shadow-lg ${
            inView ? "animate-slide-up" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-2">
                {t("education.degree")}
              </h3>
              <div className="text-lg text-primary-600 font-medium">
                {t("education.university")}
              </div>
            </div>
            <div className="mt-4 md:mt-0 text-right">
              <div className="text-secondary-600">
                {t("education.duration")}
              </div>
              <div className="text-secondary-500 text-sm">
                {t("education.location")}
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-white/50 rounded-lg">
            <p className="text-secondary-700 font-medium">
              {t("education.description")}
            </p>
          </div>

          {/* <div className="mt-6 flex items-center justify-center">
            <div className="flex items-center space-x-2">
              <svg
                className="w-5 h-5 text-accent-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-accent-600 font-medium">
                Computer Engineering
              </span>
            </div>
          </div> */}
        </div>
      </div>
    </SectionWrapper>
  );
};
