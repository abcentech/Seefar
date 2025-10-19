
import React from 'react';

interface InfoCardProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

export const InfoCard: React.FC<InfoCardProps> = ({ title, icon, children }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-shadow hover:shadow-2xl w-full">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="bg-blue-100 text-blue-700 p-3 rounded-full">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-gray-800 ml-4">{title}</h3>
        </div>
        <div className="text-gray-600 space-y-4">
          {children}
        </div>
      </div>
    </div>
  );
};
