import React from 'react';

// --- Reusable SVG Icons ---
const MissionIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const VisionIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
);

const ExternalLinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2 opacity-60 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
);

const ValueCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode; }> = ({ icon, title, children }) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
            {icon}
            <h4 className="text-xl font-bold text-gray-800 ml-4">{title}</h4>
        </div>
        <p className="text-gray-600">{children}</p>
    </div>
);

export const AboutUs: React.FC = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-teal-700 text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                        About the SAFE-MIT Platform
                    </h1>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-teal-100">
                        Empowering prospective migrants with reliable information and training to make informed decisions for a secure future.
                    </p>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <div className="flex items-center mb-4">
                                <MissionIcon />
                                <h2 className="text-3xl font-bold text-gray-800 ml-4">Our Mission</h2>
                            </div>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                To provide accessible, accurate, and country-specific information that empowers individuals to navigate the complexities of migration safely and legally. We aim to reduce vulnerability to misinformation and exploitation by being a trusted digital resource.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <div className="flex items-center mb-4">
                                <VisionIcon />
                                <h2 className="text-3xl font-bold text-gray-800 ml-4">Our Vision</h2>
                            </div>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                A world where every prospective migrant is well-informed and prepared, enabling them to pursue opportunities abroad with dignity and security, contributing positively to both their home and host communities.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Our Values Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Core Values</h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                            Our work is guided by a commitment to these core principles.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <ValueCard
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                            title="Accuracy"
                        >
                            We are committed to providing information that is thoroughly vetted, up-to-date, and reliable.
                        </ValueCard>
                        <ValueCard
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
                            title="Empowerment"
                        >
                            We believe knowledge is power. Our goal is to equip users with the tools they need to make their own informed choices.
                        </ValueCard>
                        <ValueCard
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197" /></svg>}
                            title="Accessibility"
                        >
                            We strive to make our platform user-friendly, multilingual, and optimized for low-bandwidth environments.
                        </ValueCard>
                    </div>
                </div>
            </section>

            {/* Partners Section */}
            <section className="py-20 bg-teal-50/50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
                        Our Valued Partners
                    </h2>
                    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                        <a href="https://seefar.org/" target="_blank" rel="noopener noreferrer" className="block bg-white rounded-lg p-8 shadow-lg transform hover:-translate-y-2 transition-transform duration-300 group">
                            <div className="flex items-center mb-4">
                                <h3 className="text-2xl font-bold text-gray-800">SEEFAR</h3>
                                <ExternalLinkIcon />
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                SEEFAR is a social enterprise with a global presence, dedicated to working with vulnerable populations to build a better world. Their expertise lies in addressing complex issues related to justice, security, and migration. SEEFAR's research and field experience provide the foundational evidence for much of the content and guidance available on the SAFE-MIT platform.
                            </p>
                        </a>
                        <a href="https://www.icmpd.org/" target="_blank" rel="noopener noreferrer" className="block bg-white rounded-lg p-8 shadow-lg transform hover:-translate-y-2 transition-transform duration-300 group">
                            <div className="flex items-center mb-4">
                                <h3 className="text-2xl font-bold text-gray-800">ICMPD</h3>
                                <ExternalLinkIcon />
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                The International Centre for Migration Policy Development (ICMPD) is an international organization with 20 Member States. Active in over 90 countries worldwide, it takes a comprehensive, long-term approach to migration management. ICMPD's role is crucial in ensuring the platform's content aligns with international best practices and policies for safe, orderly, and regular migration.
                            </p>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};