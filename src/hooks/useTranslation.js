import { useLanguage } from '../contexts/LanguageContext';
import hiTranslations from '../locales/hi.json';
import enTranslations from '../locales/en.json';

const translations = {
  hi: hiTranslations,
  en: enTranslations
};

export const useTranslation = () => {
  const { currentLanguage } = useLanguage();

  const t = (key) => {
    const keys = key.split('.');
    let translation = translations[currentLanguage];
    
    for (const k of keys) {
      translation = translation?.[k];
    }
    
    return translation || key;
  };

  return { t };
};