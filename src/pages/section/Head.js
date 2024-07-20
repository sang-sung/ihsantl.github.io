import React from "react";
import { withTranslation } from "react-i18next";
import ChangeLang from "./ChangeLang";

const Head = ({ t }) => {
  return (
    <div className="fixed w-full bg-custom-400 flex justify-center py-5 shadow-xl">
      <div className="container px-5 flex text-white">
        <div className="w-[200px]">
          <a href="#" className="text-2xl uppercase font-extrabold">
            {t("ihsan taleh")}
          </a>
        </div>
        <div className="flex w-[calc(100%-200px)] justify-center gap-12">
          {[
            { name: "personal" },
            { name: "experience" },
            { name: "education" },
            { name: "skill" },
            { name: "contact" },
          ].map((val, i) => {
            return (
              <a
                href={"#" + val.name}
                key={i}
                className="capitalize hover:font-bold duration-200"
              >
                {t(val.name)}
              </a>
            );
          })}
        </div>
      </div>
      <ChangeLang />
    </div>
  );
};

export default withTranslation()(Head);
