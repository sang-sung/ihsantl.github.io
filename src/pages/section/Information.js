import React from "react";
import { withTranslation } from "react-i18next";
import { useCurrentLang } from "../../services/function";

// import imgProfile from "../../assets/profile.jpg";
import resumeTh from "../../assets/pdf/ihsan-th.pdf";
import resumeEn from "../../assets/pdf/ihsan-en.pdf";

import SlideIMG from "./SlideIMG";
// import ErrorBoundary from "../components/ErrorBoundary";

function Information({ t }) {
  const currentLang = useCurrentLang();

  return (
    <div className="bg-custom-300 flex justify-center">
      <div className="flex flex-col lg:flex-row pb-10 lg:pb-0 lg:pt-[85px] w-full max-w-[2200px]">
        <div className="flex-shrink-0 w-screen lg:w-[calc((100svh-85px)*3/4)] max-w-[100vw] lg:h-[calc(100svh-85px)] max-h-[1200px]">
          <SlideIMG />
          {/* <img
          src={imgProfile}
          alt=""
          className="w-full lg:w-auto lg:h-[calc(100svh-85px)] object-contain"
        /> */}
        </div>
        <div className="text-white flex-grow flex flex-col justify-center items-center gap-y-5 mt-10 lg:mt-0">
          <div className="w-10/12 lg:w-6/12 flex justify-start">
            <p className="text-[30px] italic">Hello! It's me</p>
          </div>
          <div className="border-y-4 border-custom-600 w-10/12 lg:w-6/12 flex justify-center">
            <div
              className={`uppercase font-bold italic ${
                currentLang == "en"
                  ? "tracking-[0.5rem] xl:tracking-[2rem]"
                  : "tracking-[0.1rem] xl:tracking-[0.5rem]"
              }`}
            >
              <p className="text-[40px] xl:text-[80px]">{t("ihsan")}</p>
              <p className="text-[40px] xl:text-[80px] pl-20">{t("taleh")}</p>
            </div>
          </div>
          <div className="">
            <p className="text-[18px] xl:text-[30px] italic text-center">
              Back-End Developer / Full-Stack Developer
            </p>
          </div>
          <div className="flex gap-x-5">
            {[
              { name: "Resume (TH)", fileName: "ihsan-th", file: resumeTh },
              { name: "Resume (EN)", fileName: "ihsan-en", file: resumeEn },
            ].map((val, i) => {
              return (
                <a
                  key={i}
                  className="bg-white py-2 px-4 rounded-xl text-custom-500 hover:cursor-pointer hover:bg-gray-200 duration-300"
                  href={val.file}
                  download={val.fileName}
                >
                  {val.name}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default withTranslation()(Information);
