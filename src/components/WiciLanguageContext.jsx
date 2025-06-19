import React, { createContext, useContext, useState } from "react";
import es from "../i18n/wici/es";
import en from "../i18n/wici/en";

const translations = { es, en };
const WiciLanguageContext = createContext();

export function WiciLanguageProvider({ children }) {
  const [lang, setLang] = useState("es");
  const value = { lang, setLang, t: translations[lang] };
  return (
    <WiciLanguageContext.Provider value={value}>
      {children}
    </WiciLanguageContext.Provider>
  );
}

export function useWiciLanguage() {
  return useContext(WiciLanguageContext);
}
