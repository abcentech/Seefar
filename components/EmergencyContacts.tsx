
import React from 'react';
import { Contact } from '../types';


interface EmergencyContactsProps {
  contacts: Contact[];
}

const Icon: React.FC<{ type: Contact['type'] }> = ({ type }) => {
    const baseClasses = "h-6 w-6 text-white";
    switch(type) {
        case 'Police':
            return <svg xmlns="http://www.w3.org/2000/svg" className={baseClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>;
        case 'Ambulance':
            return <svg xmlns="http://www.w3.org/2000/svg" className={baseClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
        case 'NGO':
            return <svg xmlns="http://www.w3.org/2000/svg" className={baseClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;
        case 'Embassy':
             return <svg xmlns="http://www.w3.org/2000/svg" className={baseClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6H8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" /></svg>;
        default:
            return null;
    }
}

const getIconBgColor = (type: Contact['type']) => {
    switch(type) {
        case 'Police': return 'bg-blue-600';
        case 'Ambulance': return 'bg-red-600';
        case 'NGO': return 'bg-green-600';
        case 'Embassy': return 'bg-indigo-600';
        default: return 'bg-gray-600';
    }
}

export const EmergencyContacts: React.FC<EmergencyContactsProps> = ({ contacts }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 space-y-4">
                {contacts.map((contact, index) => (
                    <div key={index} className="flex items-center space-x-4">
                        <div className={`flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full ${getIconBgColor(contact.type)}`}>
                            <Icon type={contact.type} />
                        </div>
                        <div>
                             <h4 className="font-bold text-gray-800">{contact.name}</h4>
                             <a href={`tel:${contact.phone}`} className="text-lg font-semibold text-teal-600 hover:text-teal-700 hover:underline">
                                 {contact.phone}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
