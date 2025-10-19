import React, { useState } from 'react';

const SafeMitLogo = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="20" fill="url(#paint0_linear_1_2)"/>
    <path d="M13.5 26.5L26.5 13.5M26.5 13.5H18.875M26.5 13.5V21.125" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <defs>
      <linearGradient id="paint0_linear_1_2" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
        <stop stopColor="#14b8a6"/>
        <stop offset="1" stopColor="#0ea5e9"/>
      </linearGradient>
    </defs>
  </svg>
);


const HamburgerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
);

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

export type View = 'landing' | 'hub' | 'campaigns' | 'training' | 'analytics' | 'about';

interface HeaderProps {
  currentView: View;
  onNavigate: (view: View) => void;
}

const NavLink: React.FC<{
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
  isMobile?: boolean;
}> = ({ isActive, onClick, children, isMobile = false }) => (
  <button
    onClick={onClick}
    className={`relative font-medium tracking-wide transition-colors duration-300 group ${
        isMobile 
        ? 'block w-full text-left px-4 py-3 text-lg' 
        : 'px-1 py-2'
    } ${
      isActive
        ? 'text-white'
        : 'text-teal-100 hover:text-white'
    }`}
    aria-current={isActive ? 'page' : undefined}
  >
    {children}
    {!isMobile && (
         <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-teal-300 transform transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0'} group-hover:scale-x-100`}></span>
    )}
  </button>
);


export const Header: React.FC<HeaderProps> = ({ currentView, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigation = (view: View) => {
    onNavigate(view);
    setIsMobileMenuOpen(false);
  }

  const navLinks = [
    { view: 'hub', label: 'Information Hub' },
    { view: 'about', label: 'About Us' },
    { view: 'campaigns', label: 'Campaign Library' },
    { view: 'training', label: 'Training Modules' },
    { view: 'analytics', label: 'Analytics' },
  ] as const;

  return (
    <>
      <header className="bg-gradient-to-r from-teal-800 to-blue-800 shadow-lg w-full sticky top-0 z-50 border-b border-teal-600/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <button onClick={() => handleNavigation('landing')} className="flex items-center space-x-3 group">
              <SafeMitLogo />
              <h1 className="text-xl sm:text-2xl font-bold text-white tracking-wider">
                SAFE-MIT Platform
              </h1>
            </button>
            <nav className="hidden md:flex items-center space-x-6">
              {navLinks.map(link => (
                 <div key={link.view} className="group">
                    <NavLink isActive={currentView === link.view} onClick={() => handleNavigation(link.view)}>
                        {link.label}
                    </NavLink>
                 </div>
              ))}
            </nav>
            <div className="md:hidden">
                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white p-2 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-white">
                    {isMobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
                </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed top-20 left-0 w-full h-[calc(100vh-80px)] bg-teal-800 z-40 transition-transform duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <nav className="flex flex-col pt-8 space-y-2">
            {navLinks.map(link => (
                <NavLink key={link.view} isMobile isActive={currentView === link.view} onClick={() => handleNavigation(link.view)}>
                    {link.label}
                </NavLink>
            ))}
          </nav>
      </div>
    </>
  );
};