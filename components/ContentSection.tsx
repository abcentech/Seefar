
import React from 'react';

interface ContentSectionProps {
  children: React.ReactNode;
}

export const ContentSection: React.FC<ContentSectionProps> = ({ children }) => {
  return (
    <section className="mb-12">
      {children}
    </section>
  );
};
