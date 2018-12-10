import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const options = {
  fallbackLng: 'es',
  load: 'currentOnly',
  ns: ['translations'],
  defaultNS: 'translations',

  debug: false,

  interpolation: {
    escapeValue: false,
    formatSeparator: ',',
    format: (value, format, lng) => {
      if (format === 'uppercase') return value.toUpperCase();
      return value;
    },
  },
  wait: process && !process.release,
};

if (process && !process.release) {
  i18n
    .use(XHR)
    .use(LanguageDetector);
}

if (!i18n.isInitialized) i18n.init(options);

module.exports = i18n;
