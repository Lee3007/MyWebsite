import React from "react";
import { useTranslation } from "../../hooks/useTranslation";
import { SectionWrapper } from "../common/SectionWrapper";
import { CONTACT_LINKS } from "../../utils/constants";
import leeProfPic from "../../assets/LeePicture4.jpg";

export const Hero: React.FC = () => {
  const { t } = useTranslation();

  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <SectionWrapper
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary-50 to-primary-50"
    >
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <img
            src={leeProfPic}
            alt="Felipe Lee"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto object-cover shadow-lg ring-4 ring-white"
          />
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 mb-4 animate-slide-up">
          <span className="text-secondary-600">{t("hero.greeting")}</span>{" "}
          <span className="text-primary-600">Felipe Lee</span>
        </h1>

        <h2 className="text-xl md:text-2xl lg:text-3xl text-secondary-700 mb-6 animate-slide-up animation-delay-200">
          {t("hero.role")}
        </h2>

        <p className="text-base md:text-lg text-secondary-600 max-w-2xl mx-auto mb-8 animate-slide-up animation-delay-400">
          {t("hero.description")}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animation-delay-600">
          <button
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#contact");
            }}
            className="px-8 py-3 bg-primary-600 text-white rounded-full font-medium hover:bg-primary-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            {t("hero.cta")}
          </button>

          <a
            href={CONTACT_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border-2 border-primary-600 text-primary-600 rounded-full font-medium hover:bg-primary-50 transform hover:scale-105 transition-all duration-300"
          >
            GitHub
          </a>
        </div>

        <div className="mt-16 animate-bounce">
          <svg
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#experience");
            }}
            className="w-6 h-6 mx-auto text-secondary-400 cursor-pointer hover:text-secondary-600 transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </SectionWrapper>
  );
};
