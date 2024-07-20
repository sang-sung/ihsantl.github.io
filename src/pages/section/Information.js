import React from "react";
import { withTranslation } from "react-i18next";
import imgProfile from "../../assets/profile.jpg";
import { useCurrentLang } from "../../services/function";

function Information({ t }) {
  const currentLang = useCurrentLang();

  return (
    <div className="bg-custom-300 flex pt-[85px]">
      <div className="flex-shrink-0">
        <img
          src={imgProfile}
          alt=""
          className="h-[calc(100svh-85px)] object-contain"
        />
      </div>
      <div className="text-white flex-grow flex flex-col justify-center items-center gap-y-5">
        <div className="w-6/12 flex justify-start">
          <p className="text-[30px] italic">
            Hello! It's me
          </p>
        </div>
        <div className="border-y-4 border-custom-600 w-6/12 flex justify-center">
          <div
            className={`uppercase font-bold italic ${
              currentLang == "en" ? "tracking-[2rem]" : "tracking-[0.5rem]"
            }`}
          >
            <p className="text-[80px]">{t("ihsan")}</p>
            <p className="text-[80px] pl-20">{t("taleh")}</p>
          </div>
        </div>
        <div className="">
          <p className="text-[30px] italic">
            Back-End Developer / Full-Stack Developer
          </p>
        </div>
      </div>
    </div>
  );
}

export default withTranslation()(Information);
