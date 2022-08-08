import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { initReactI18next } from 'react-i18next';
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
i18n
  .use(HttpApi)
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    
    supportedLngs:['en','ar','fr'],
    fallbackLng: "en",
    
    detection:{
      order:['cookie','htmlTag','localstorage','path','subdomain'],
      caches:['cookie'],
    },
    // Here we can also add the api for changing the language
    backend:{
      loadPath:'/assets/locales/{{lng}}/translation.json',

    },
    react:{
      useSuspense:false
    },

   
  });


  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    
    </React.StrictMode>
  );

 
reportWebVitals();
