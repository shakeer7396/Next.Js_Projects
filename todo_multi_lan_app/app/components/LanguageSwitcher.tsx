'use client';

import i18n from '../lib/i18n'; // adjust path as needed

const LanguageSwitcher = () => {
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex justify-end mb-4">
      <select
        value={i18n.language}
        onChange={(e) => changeLanguage(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="en">English</option>
        <option value="hi">हिंदी</option>
        <option value="te">తెలుగు</option>
        <option value="kn">ಕನ್ನಡ</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
