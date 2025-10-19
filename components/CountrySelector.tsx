import React from 'react';
import type { Country, CountryCode } from '../types';

interface CountrySelectorProps {
  countries: Country[];
  selectedCountry: CountryCode;
  onSelectCountry: (countryCode: CountryCode) => void;
}

const CheckmarkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);

export const CountrySelector: React.FC<CountrySelectorProps> = ({ countries, selectedCountry, onSelectCountry }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">Welcome to the Information Hub</h2>
      <p className="text-lg text-gray-600 mb-8 text-center">Start by selecting your country of origin below.</p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {countries.map((country) => {
            const isSelected = selectedCountry === country.code;
            return (
                <button
                    key={country.code}
                    onClick={() => onSelectCountry(country.code)}
                    className={`relative text-left p-4 rounded-xl border-2 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-teal-500/70 group
                    ${isSelected
                        ? 'bg-teal-50/50 border-teal-600 shadow-lg'
                        : 'bg-white border-gray-200 hover:border-teal-400 hover:shadow-md hover:-translate-y-1 hover:scale-105'
                    }`}
                    aria-pressed={isSelected}
                >
                    <div className="text-5xl mb-3">{country.flag}</div>
                    <h3 className="font-bold text-gray-800 text-lg">{country.name}</h3>
                    
                    {isSelected && (
                        <div className="absolute top-3 right-3 flex items-center justify-center h-8 w-8 rounded-full bg-teal-600 shadow-sm">
                           <CheckmarkIcon />
                        </div>
                    )}
                </button>
            )
        })}
      </div>
    </div>
  );
};