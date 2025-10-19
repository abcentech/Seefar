import React, { useState, useEffect } from 'react';
import { debunkMyth } from '../services/geminiService';

interface MythBusterProps {
  myth: string;
  countryName: string;
}

const ChevronIcon: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
);

const LoadingSpinner: React.FC = () => (
  <div className="flex justify-center items-center space-x-2 py-4">
    <div className="w-3 h-3 rounded-full animate-pulse bg-teal-600"></div>
    <div className="w-3 h-3 rounded-full animate-pulse bg-teal-600 delay-150"></div>
    <div className="w-3 h-3 rounded-full animate-pulse bg-teal-600 delay-300"></div>
    <span className="text-gray-600 text-sm">Debunking myth with AI...</span>
  </div>
);

export const MythBuster: React.FC<MythBusterProps> = ({ myth, countryName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [fact, setFact] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const generateFact = async () => {
      // Only fetch if it's open and we haven't fetched before
      if (!fact && !error) {
        setIsLoading(true);
        try {
          const response = await debunkMyth(myth, countryName);
          setFact(response);
        } catch (err) {
          setError('Failed to fetch data from Gemini API.');
          console.error(err);
        } finally {
          setIsLoading(false);
        }
      }
    };

    if (isOpen) {
      generateFact();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, myth, countryName]);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-shadow hover:shadow-xl border border-gray-200/80">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-6 flex justify-between items-center space-x-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
        aria-expanded={isOpen}
      >
        <div className="flex-grow">
            <span className="text-sm font-semibold text-red-600 uppercase tracking-wider">Common Myth</span>
            <p className="italic text-gray-700 mt-1 font-medium">"{myth}"</p>
        </div>
        <div className="flex-shrink-0 text-gray-400">
            <ChevronIcon isOpen={isOpen} />
        </div>
      </button>
      
      <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="px-6 pb-6 pt-2">
            <hr className="border-gray-200 mb-4" />
            <h4 className="font-semibold text-green-700 text-sm uppercase tracking-wider">The Facts</h4>
            <div className="mt-2">
                {isLoading && <LoadingSpinner />}
                {error && <p className="text-red-500">{error}</p>}
                {fact && (
                    <div className="prose prose-teal max-w-none" dangerouslySetInnerHTML={{ __html: fact }} />
                )}
            </div>
        </div>
      </div>
    </div>
  );
};
