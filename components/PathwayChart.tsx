import React from 'react';
import { LegalPathway } from '../types';

interface PathwayChartProps {
    pathways: LegalPathway[];
}

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);


export const PathwayChart: React.FC<PathwayChartProps> = ({ pathways }) => {
    if (!pathways || pathways.length === 0) {
        return <p className="text-gray-500">No specific pathway information available at this time.</p>
    }

    return (
        <div className="space-y-6">
            {pathways.map((pathway, index) => (
                <div key={index} className="bg-gray-50/80 p-5 rounded-lg border border-gray-200">
                    <h4 className="text-lg font-bold text-gray-800">{pathway.name}</h4>
                    <p className="text-gray-600 mt-1 mb-4">{pathway.description}</p>
                    <ul className="space-y-3">
                        {pathway.steps.map((step, stepIndex) => (
                            <li key={stepIndex} className="flex items-start">
                                <div className="flex-shrink-0 mt-1">
                                    <CheckIcon />
                                </div>
                                <span className="ml-3 text-gray-700">{step}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};
