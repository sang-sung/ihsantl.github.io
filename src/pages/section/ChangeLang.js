import React, { useState } from "react";
import i18n from "../../services/i18n";
import { withTranslation } from "react-i18next";
import { useCurrentLang } from "../../services/function";

function ChangeLang({ t }) {
  const currentLanguage = useCurrentLang();

  const onChangLang = (lang) => {
    localStorage.setItem("language", lang);
    i18n.changeLanguage(lang);
    console.log(currentLanguage);
  };

  return (
    <div
      className={`absolute top-2 right-2 md:top-3 md:right-3 flex flex-col items-end gap-3`}
    >
      <div
        className={`gap-0 bg-[#ebebeb] rounded-md overflow-hidden grid grid-cols-2 w-[100px] md:w-[160px]`}
      >
        {[
          { lang: "th", text: "lang_th" },
          { lang: "en", text: "lang_en" },
        ].map((val, i) => {
          return (
            <button
              key={i}
              className={`w-full py-1 md:py-1 text-[12px] md:text-base font-medium ${
                currentLanguage === val.lang
                  ? "bg-custom-800 text-white"
                  : "text-custom-800"
              }`}
              onClick={() => {
                onChangLang(val.lang);
              }}
            >
              {t(val.text)}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default withTranslation()(ChangeLang);
