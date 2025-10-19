
import React from 'react';

interface ResourceCardProps {
    title: string;
    description: string;
    link: string;
}

const ExternalLinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
);


export const ResourceCard: React.FC<ResourceCardProps> = ({ title, description, link }) => {
    return (
        <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block p-6 bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border-l-4 border-transparent hover:border-teal-500"
        >
            <h4 className="font-bold text-gray-800 text-lg">{title}</h4>
            <p className="text-gray-600 mt-1 mb-3">{description}</p>
            <div className="font-semibold text-teal-600 flex items-center group">
                Visit Website
                <ExternalLinkIcon />
            </div>
        </a>
    );
};
