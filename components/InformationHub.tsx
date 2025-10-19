
import React, { useMemo } from 'react';
import type { Country, CountryCode, LanguageCode, CountryContent } from '../types';
import { CountrySelector } from './CountrySelector';
import { LanguageSelector } from './LanguageSelector';
import { ContentSection } from './ContentSection';
import { MythBuster } from './MythBuster';
import { FAQSection } from './FAQSection';
import { PathwayChart } from './PathwayChart';
import { InfoCard } from './InfoCard';
import { EmergencyContacts } from './EmergencyContacts';
import { ResourceCard } from './ResourceCard';

interface InformationHubProps {
  countries: Country[];
  selectedCountry: Country;
  onSelectCountry: (countryCode: CountryCode) => void;
  selectedLanguageCode: LanguageCode;
  onSelectLanguage: (languageCode: LanguageCode) => void;
}

const SafeTravelIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const QuestionIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const MythIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>;
const SupportIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;

// FIX: Define a typed empty content object to use as a fallback.
// This prevents TypeScript from inferring `currentContent` as `{}` when
// language-specific content is not found, which was causing property access errors.
const EMPTY_CONTENT: CountryContent = {
  myths: [],
  faqs: [],
  contacts: [],
  pathways: [],
  resources: [],
};


export const InformationHub: React.FC<InformationHubProps> = ({
  countries,
  selectedCountry,
  onSelectCountry,
  selectedLanguageCode,
  onSelectLanguage,
}) => {
  // --- Fallback Logic ---
  // Start with the default language content, then merge the selected language content over it.
  // This ensures that if a translation is missing in the selected language, it falls back to the default.
  const currentContent = useMemo(() => {
    const defaultContent = selectedCountry.content[selectedCountry.defaultLanguage] || EMPTY_CONTENT;
    const selectedContent = selectedCountry.content[selectedLanguageCode] || {};
    return { ...defaultContent, ...selectedContent };
  }, [selectedCountry, selectedLanguageCode]);

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ContentSection>
          <CountrySelector
            countries={countries}
            selectedCountry={selectedCountry.code}
            onSelectCountry={onSelectCountry}
          />
        </ContentSection>
        
        <div className="mt-12">
          <ContentSection>
            <LanguageSelector
              languages={selectedCountry.languages}
              selectedLanguage={selectedLanguageCode}
              onSelectLanguage={onSelectLanguage}
            />
          </ContentSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Legal Pathways */}
              <InfoCard title="Legal Migration Pathways" icon={<SafeTravelIcon />}>
                <p className="mb-4">Explore the official, safe, and legal routes for migrating from {selectedCountry.name}. Following these procedures is crucial for your safety and success.</p>
                <PathwayChart pathways={currentContent.pathways} />
              </InfoCard>

              {/* Myth Busting */}
              <InfoCard title="Common Myths vs. Facts" icon={<MythIcon />}>
                <p>Don't fall for dangerous misinformation. Here are some common myths about migration from {selectedCountry.name}, debunked with facts using AI.</p>
                <div className="space-y-4 mt-4">
                  {currentContent.myths?.map((myth, index) => (
                    <MythBuster key={`${selectedCountry.code}-${selectedLanguageCode}-${index}`} myth={myth} countryName={selectedCountry.name} />
                  ))}
                </div>
              </InfoCard>
            </div>
            
            <div className="lg:col-span-1 space-y-8">
                {/* Emergency Contacts */}
                <InfoCard title="Emergency & Support Contacts" icon={<SupportIcon />}>
                    <p>If you are in distress or need help, contact these organizations in {selectedCountry.name}.</p>
                    <div className="mt-4">
                        <EmergencyContacts contacts={currentContent.contacts} />
                    </div>
                </InfoCard>

                {/* FAQ */}
                <InfoCard title="Frequently Asked Questions" icon={<QuestionIcon />}>
                    <FAQSection faqs={currentContent.faqs} />
                </InfoCard>

                {/* External Resources */}
                 <InfoCard title="Helpful Resources" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>}>
                    <div className="space-y-4">
                        {currentContent.resources?.map((resource, index) => (
                            <ResourceCard key={index} {...resource} />
                        ))}
                    </div>
                </InfoCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
