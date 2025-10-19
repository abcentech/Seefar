import React from 'react';

const Placeholder: React.FC<{ title: string; description: string }> = ({ title, description }) => (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">{description}</p>
        <div className="mt-8 bg-gray-100 border border-dashed border-gray-300 rounded-lg p-12">
            <p className="text-gray-500 font-semibold">Feature Coming Soon</p>
        </div>
    </div>
);


export const CampaignLibrary: React.FC = () => {
  return (
    <Placeholder 
        title="Campaign Library"
        description="Explore multimedia assets like videos, audio clips, and infographics. Access campaign toolkits and contribute your own content through our moderated user-generated content portal."
    />
  );
};
