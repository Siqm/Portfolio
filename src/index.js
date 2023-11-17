import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import global_en from './translations/en.json'
import global_pt from './translations/pt.json'
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        global: global_en
      },
      pt: {
        global: global_pt
      }
    },
    lng: "pt", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);
