import React from 'react';
import { useTranslation } from 'react-i18next';
import { LOCALES } from 'translations';

const LanguagePicker = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div>
      <label className="me-1">{t('dashboard.select_language')}</label>
      <select value={i18n.language} onChange={changeLanguage}>
        {LOCALES.map((locale) => (
          <option value={locale} key={locale}>
            {locale}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguagePicker;
