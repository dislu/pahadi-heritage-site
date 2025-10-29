import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('hi'); // Default to Hindi

  // Load saved language preference from localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('pahadiLanguage');
    if (savedLanguage && (savedLanguage === 'hi' || savedLanguage === 'en')) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  // Save language preference to localStorage
  const changeLanguage = (language) => {
    setCurrentLanguage(language);
    localStorage.setItem('pahadiLanguage', language);
    
    // Update document direction and language attributes
    document.documentElement.lang = language;
    if (language === 'hi') {
      document.documentElement.dir = 'ltr'; // Hindi is left-to-right
    }
  };

  const isHindi = currentLanguage === 'hi';
  const isEnglish = currentLanguage === 'en';

  return (
    <LanguageContext.Provider 
      value={{ 
        currentLanguage, 
        changeLanguage, 
        isHindi, 
        isEnglish 
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};