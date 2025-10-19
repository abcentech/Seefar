import React from 'react';
import type { Language, LanguageCode } from '../types';

interface LanguageSelectorProps {
  languages: Language[];
  selectedLanguage: LanguageCode;
  onSelectLanguage: (languageCode: LanguageCode) => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ languages, selectedLanguage, onSelectLanguage }) => {
  if (languages.length <= 1) {
    return null; // Don't show selector if there's only one language
  }

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-700 mb-3 text-center sm:text-left">Select Language</h2>
      <div className="flex flex-wrap justify-center sm:justify-start gap-3">
        {languages.map((language) => (
          <button
            key={language.code}
            onClick={() => onSelectLanguage(language.code)}
            className={`px-4 py-2 rounded-full font-medium transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500
              ${selectedLanguage === language.code
                ? 'bg-teal-600 text-white shadow-md'
                : 'bg-gray-200 text-gray-800 hover:bg-teal-100'
              }`}
            aria-pressed={selectedLanguage === language.code}
          >
            {language.name}
          </button>
        ))}
      </div>
    </div>
  );
};