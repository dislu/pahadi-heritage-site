import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTranslation } from '../../hooks/useTranslation';
import './LanguageToggle.css';

const LanguageToggle = () => {
  const { currentLanguage, changeLanguage } = useLanguage();
  const { t } = useTranslation();

  return (
    <div className="language-toggle">
      <button
        className={`language-btn ${currentLanguage === 'hi' ? 'active' : ''}`}
        onClick={() => changeLanguage('hi')}
        title={t('common.switchToHindi')}
      >
        हिं
      </button>
      <div className="toggle-divider">|</div>
      <button
        className={`language-btn ${currentLanguage === 'en' ? 'active' : ''}`}
        onClick={() => changeLanguage('en')}
        title={t('common.switchToEnglish')}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageToggle;