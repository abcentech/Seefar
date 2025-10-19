import React, { useState, useMemo, useEffect } from 'react';
import { Header, type View } from './components/Header';
import { LandingPage } from './components/LandingPage';
import { InformationHub } from './components/InformationHub';
import { CampaignLibrary } from './components/CampaignLibrary';
import { TrainingModules } from './components/TrainingModules';
import { AnalyticsDashboard } from './components/AnalyticsDashboard';
import { AboutUs } from './components/AboutUs';
import { COUNTRIES } from './constants';
import { CountryCode, LanguageCode } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<View>('landing');
  const [selectedCountryCode, setSelectedCountryCode] = useState<CountryCode>(CountryCode.NG);
  const [selectedLanguageCode, setSelectedLanguageCode] = useState<LanguageCode>(COUNTRIES[0].languages[0].code);

  const selectedCountry = useMemo(() => {
    return COUNTRIES.find(c => c.code === selectedCountryCode) || COUNTRIES[0];
  }, [selectedCountryCode]);

  useEffect(() => {
    // When the country changes, reset the language to the new country's default language.
    if (selectedCountry) {
      setSelectedLanguageCode(selectedCountry.languages[0].code);
    }
  }, [selectedCountry]);

  const renderContent = () => {
    switch (view) {
      case 'hub':
        return (
          <InformationHub
            countries={COUNTRIES}
            selectedCountry={selectedCountry}
            onSelectCountry={setSelectedCountryCode}
            selectedLanguageCode={selectedLanguageCode}
            onSelectLanguage={setSelectedLanguageCode}
          />
        );
      case 'about':
        return <AboutUs />;
      case 'campaigns':
        return <CampaignLibrary />;
      case 'training':
        return <TrainingModules />;
      case 'analytics':
        return <AnalyticsDashboard />;
      case 'landing':
      default:
        return <LandingPage onGetStarted={() => setView('hub')} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header currentView={view} onNavigate={setView} />
      <main>
        {renderContent()}
      </main>
    </div>
  );
}

export default App;