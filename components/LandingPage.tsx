import React from 'react';

interface LandingPageProps {
  onGetStarted: () => void;
}

// --- SVG Icons for features ---
const GuidanceIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 16.382V5.618a1 1 0 00-.553-.894L15 2m-6 5l6-3m0 0l6 3" />
    </svg>
);
const MythIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 10h.01M15 10h.01M9 14h6" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 14a2.5 2.5 0 105 0" />
    </svg>
);
const TrainingIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0v3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222 4 2.222V20" />
    </svg>
);
const SocialIcon: React.FC<{ d: string }> = ({ d }) => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d={d} clipRule="evenodd" />
    </svg>
);
const ExternalLinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 opacity-60 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
);

// --- Reusable Feature Card Component ---
const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
        <div className="mb-4">{icon}</div>
        <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{children}</p>
    </div>
);

// --- Reusable Step Component for "How it Works" ---
const HowItWorksStep: React.FC<{ number: string; title: string; children: React.ReactNode; isLast?: boolean }> = ({ number, title, children, isLast = false }) => (
    <div className="relative flex items-start">
        <div className="flex-shrink-0 flex flex-col items-center mr-6">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-teal-600 text-white font-bold text-xl ring-8 ring-gray-100">
                {number}
            </div>
            {!isLast && <div className="w-0.5 h-full bg-gray-300 mt-2"></div>}
        </div>
        <div className="pt-2">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600">{children}</p>
        </div>
    </div>
);

// --- Reusable Stat Card Component for "Our Impact" section ---
const StatCard: React.FC<{ value: string; label: string; }> = ({ value, label }) => (
    <div className="bg-teal-700/50 p-6 rounded-lg text-center">
        <p className="text-4xl font-extrabold text-white">{value}</p>
        <p className="text-teal-200 mt-1">{label}</p>
    </div>
)


// --- Main Landing Page Component ---
export const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted }) => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden gradient-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 animate-float">
            Safe & Informed Migration Starts Here
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-teal-100 mb-10">
            The SAFE-MIT Digital Platform empowers prospective migrants with reliable information and training to make informed decisions for a secure future.
          </p>
          <button
            onClick={onGetStarted}
            className="bg-white text-teal-700 font-bold py-4 px-10 rounded-full text-lg hover:bg-teal-100 transition duration-300 transform hover:scale-105 shadow-2xl focus:outline-none focus:ring-4 focus:ring-teal-300"
          >
            Explore the Information Hub
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Your Trusted Companion for a Safe Journey</h2>
                <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">We provide the tools and knowledge you need, every step of the way.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <FeatureCard icon={<GuidanceIcon />} title="Country-Specific Guidance">
                  Access up-to-date information on visa requirements, legal pathways, and migrant rights for Nigeria, Senegal, Morocco, and Kenya.
                </FeatureCard>
                <FeatureCard icon={<MythIcon />} title="AI-Powered Myth-Busting">
                  Our smart tools provide factual, evidence-based responses to dangerous misinformation about irregular migration.
                </FeatureCard>
                <FeatureCard icon={<TrainingIcon />} title="Essential Training Modules">
                  Engage with micro-learning lessons and quizzes to build your knowledge and prepare for your migration journey.
                </FeatureCard>
            </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Get Started in 3 Simple Steps</h2>
                  <p className="mt-4 text-lg text-gray-600">Navigating the platform is easy and intuitive.</p>
              </div>
              <div className="max-w-2xl mx-auto">
                  <HowItWorksStep number="1" title="Select Your Country">
                      Choose your country of origin to receive tailored information and guidance relevant to you.
                  </HowItWorksStep>
                  <HowItWorksStep number="2" title="Explore and Learn">
                      Dive into detailed guidance, get answers to frequently asked questions, and see common myths debunked.
                  </HowItWorksStep>
                  <HowItWorksStep number="3" title="Prepare for Your Journey" isLast>
                      Use our training modules and resources to build your knowledge and prepare for a safe migration process.
                  </HowItWorksStep>
              </div>
          </div>
      </section>

      {/* Our Impact Section */}
      <section className="bg-teal-800 text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold">Making a Difference, Together</h2>
                  <p className="mt-4 text-lg text-teal-200 max-w-3xl mx-auto">Our platform is a growing resource for thousands of users across our partner countries.</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                  <StatCard value="4" label="Countries" />
                  <StatCard value="8" label="Languages" />
                  <StatCard value="100+" label="Guidance Topics" />
                  <StatCard value="10k+" label="Users Assisted" />
              </div>
          </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            In Partnership With
          </h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            <a href="https://seefar.org/" target="_blank" rel="noopener noreferrer" className="block bg-white rounded-lg p-8 text-center md:text-left shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className='flex items-center justify-center md:justify-start mb-2'>
                    <h3 className="text-2xl font-semibold text-gray-700">SEEFAR</h3>
                    <ExternalLinkIcon />
                </div>
                <p className="text-gray-600">A social enterprise with a mission to work with vulnerable people to build a better world. They specialize in justice, security, and migration issues.</p>
            </a>
            <a href="https://www.icmpd.org/" target="_blank" rel="noopener noreferrer" className="block bg-white rounded-lg p-8 text-center md:text-left shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className='flex items-center justify-center md:justify-start mb-2'>
                    <h3 className="text-2xl font-semibold text-gray-700">ICMPD</h3>
                    <ExternalLinkIcon />
                </div>
                <p className="text-gray-600">An international organisation that helps governments and partners to manage migration in a sustainable and humane way.</p>
            </a>
          </div>
        </div>
      </section>

       {/* Footer */}
       <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-6 lg:px-8 pt-16 pb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                <div className="col-span-2 lg:col-span-2">
                    <h3 className="text-lg font-bold">SAFE-MIT Platform</h3>
                    <p className="mt-4 text-gray-400 max-w-sm">Your trusted digital source for safe migration information, empowering journeys with knowledge and preparation.</p>
                </div>
                <div>
                    <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-400">Navigation</h3>
                    <ul className="mt-4 space-y-3">
                        <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Information Hub</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Campaigns</a></li>
                    </ul>
                </div>
                 <div>
                    <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-400">Partners</h3>
                    <ul className="mt-4 space-y-3">
                        <li><a href="https://seefar.org/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">SEEFAR</a></li>
                        <li><a href="https://www.icmpd.org/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">ICMPD</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-400">Legal</h3>
                    <ul className="mt-4 space-y-3">
                        <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Cookie Policy</a></li>
                    </ul>
                </div>
                <div className="col-span-2 md:col-span-1">
                    <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-400">Connect With Us</h3>
                    <div className="flex mt-4 space-x-5">
                        <a href="#" className="text-gray-400 hover:text-white"><span className="sr-only">Facebook</span><SocialIcon d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></a>
                        <a href="#" className="text-gray-400 hover:text-white"><span className="sr-only">Twitter</span><SocialIcon d="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.22-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.52 8.52 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21c7.35 0 11.37-6.1 11.37-11.37 0-.17 0-.34-.01-.51.78-.57 1.45-1.27 1.98-2.08z" /></a>
                        <a href="#" className="text-gray-400 hover:text-white"><span className="sr-only">LinkedIn</span><SocialIcon d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></a>
                    </div>
                </div>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
                <p>&copy; {new Date().getFullYear()} SAFE-MIT Digital Platform. All Rights Reserved.</p>
            </div>
        </div>
      </footer>
    </div>
  );
};