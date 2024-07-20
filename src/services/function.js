import { useEffect, useState } from "react";
import i18n from "./i18n";

export function useCurrentLang() {
  const [currentLang, setCurrentLang] = useState(i18n.language);

  useEffect(() => {
    const languageChangeHandler = () => {
      setCurrentLang(i18n.language);
    };

    i18n.on("languageChanged", languageChangeHandler);

    return () => {
      i18n.off("languageChanged", languageChangeHandler);
    };
  }, [i18n]);

  return currentLang;
}
