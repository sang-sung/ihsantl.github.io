import React, { useState } from "react";
import { withTranslation } from "react-i18next";
import { HeaderTitle } from "../components/Components";
import { Modal } from "../components/Modal";

import imgAngular from "../../assets/logo/logo-angular.png";
import imgCss from "../../assets/logo/logo-css.png";
import imgExpress from "../../assets/logo/logo-express.png";
import imgHtml from "../../assets/logo/logo-html.png";
import imgJs from "../../assets/logo/logo-js.png";
import imgLaravel from "../../assets/logo/logo-laravel.png";
import imgNodejs from "../../assets/logo/logo-nodejs2.png";
import imgPhp from "../../assets/logo/logo-php.png";
import imgReact from "../../assets/logo/logo-react.png";
import imgSql from "../../assets/logo/logo-sql.png";
import imgTailwind from "../../assets/logo/logo-tailwind.png";
import imgTs from "../../assets/logo/logo-ts.png";

function Experience({ t }) {
  const [showModal, setShowModal] = useState(false);
  const [dataModal, setDataModal] = useState();

  const ExpLs = [
    {
      companyName: "Wadil Aqeeq",
      period: "FREELANCE",
      // position: "Front-End Developer",
      contentLs: [
        {
          head: t("the_website_that_has_been_developed"),
          list: [t("wadil_1"), t("wadil_2")],
        },
      ],
      frameWork: [
        {
          head: "Fron-End",
          list: [
            { text: "React", icon: imgReact },
            { text: "HTML", icon: imgHtml },
            { text: "CSS", icon: imgCss },
            { text: "JS", icon: imgJs },
            { text: "Tailwind", icon: imgTailwind },
          ],
        },
        {
          head: "Back-End",
          list: [
            { text: "NodeJS", icon: imgNodejs },
            { text: "ExpressJS", icon: imgExpress },
            { text: "JS", icon: imgJs },
          ],
        },
      ],
    },
    {
      companyName: t("goody"),
      period: t("oct2023_present"),
      position: "Front-End Developer",
      contentLs: [
        {
          head: t("responsibilities"),
          list: [t("goody_1"), t("goody_2")],
        },
      ],
      frameWork: [
        {
          head: "Fron-End",
          list: [
            { text: "React", icon: imgReact },
            { text: "Angular", icon: imgAngular },
            { text: "HTML", icon: imgHtml },
            { text: "CSS", icon: imgCss },
            { text: "JS", icon: imgJs },
            { text: "TS", icon: imgTs },
            { text: "Tailwind", icon: imgTailwind },
          ],
        },
      ],
    },
    {
      companyName: t("soat"),
      period: t("jul2022_jul2023"),
      position: "Full-Stack Developer",
      contentLs: [
        {
          head: t("responsibilities"),
          list: [t("soat_1"), t("soat_2"), t("soat_3")],
        },
        {
          head: t("the_website_that_has_been_developed"),
          list: [t("soat_4"), t("soat_5"), t("soat_6")],
        },
      ],
      frameWork: [
        {
          head: "Fron-End",
          list: [
            { text: "React", icon: imgReact },
            { text: "HTML", icon: imgHtml },
            { text: "CSS", icon: imgCss },
            { text: "JS", icon: imgJs },
            { text: "Tailwind", icon: imgTailwind },
          ],
        },
        {
          head: "Back-End",
          list: [
            { text: "Laravel", icon: imgLaravel },
            { text: "PHP", icon: imgPhp },
            { text: "SQL", icon: imgSql },
          ],
        },
      ],
    },
    {
      companyName: t("cmc"),
      period: t("jul2021_feb2022"),
      position: t("se"),
      contentLs: [
        {
          head: t("responsibilities"),
          list: [t("cmc_1"), t("cmc_2"), t("cmc_3"), t("cmc_4"), t("cmc_5")],
        },
        {
          head: t("projects_managed"),
          list: [t("cmc_6")],
        },
      ],
    },
    {
      companyName: t("powersunlight"),
      period: t("feb2021_mar2021"),
      position: t("se"),
      contentLs: [
        {
          head: t("responsibilities"),
          list: [
            t("powersunlight_1"),
            t("powersunlight_2"),
            t("powersunlight_3"),
            t("powersunlight_4"),
            t("powersunlight_5"),
          ],
        },
        {
          head: t("projects_managed"),
          list: [t("powersunlight_6")],
        },
      ],
    },
    {
      companyName: t("tkb"),
      period: t("jan2020_jun2020"),
      position: t("se"),
      contentLs: [
        {
          head: t("responsibilities"),
          list: [
            t("tkb_1"),
            t("tkb_2"),
            t("tkb_3"),
            t("tkb_4"),
            t("tkb_5"),
            t("tkb_6"),
          ],
        },
        {
          head: t("projects_managed"),
          list: [
            t("tkb_7"),
            t("tkb_8"),
            t("tkb_9"),
            t("tkb_10"),
            t("tkb_11"),
            t("tkb_12"),
          ],
        },
      ],
    },
  ];
  return (
    <div className="flex flex-col items-center gap-y-5">
      <HeaderTitle title={t("experience")} />

      <div className="w-full flex flex-col items-center">
        {ExpLs.map((val, i) => {
          return (
            <div
              className="grid grid-cols-2 cursor-pointer w-full box-content hover:opacity-80"
              key={val.companyName}
              onClick={(e) => {
                setDataModal(null);
                setShowModal(true);
                setTimeout(() => {
                  setDataModal(val);
                }, 10);
              }}
            >
              {i % 2 == 1 && <div className="border-r-2"></div>}
              <div
                className={`w-full p-5 flex  relative ${
                  i % 2 == 0 ? "border-r-2 justify-end" : ""
                }`}
              >
                <div
                  className={`absolute bg-white w-4 h-4 rounded-full top-6 ${
                    i % 2 == 0
                      ? "right-[-8px] lg:right-[-10px]"
                      : "left-[-8px] lg:left-[-10px]"
                  }`}
                ></div>
                <div className={`${i % 2 == 0 && "text-end"}`}>
                  <p className="text-xl font-bold text-custom-600">
                    {val.period}
                  </p>
                  <p className="text-base font-medium italic">
                    {val.companyName}
                  </p>
                  <p className="text-sm">{val.position}</p>
                  <p className="text-xs italic mt-1">
                    {t("click_for_moreinformation")}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Modal
        stateModal={showModal}
        setStateModal={setShowModal}
        showClose={true}
        closeOutArea={true}
      >
        <div className="text-custom-500">
          {!dataModal ? (
            "ไม่พบข้อมูล"
          ) : (
            <div className="flex flex-col gap-y-5">
              <div className="">
                <p className="text-xl font-bold">{dataModal.companyName}</p>
                <p className="">
                  <span className="font-semibold">{t("period") + ": "}</span>
                  {dataModal.period}
                </p>
                {dataModal.position && (
                  <p className="">
                    <span className="font-semibold">
                      {t("position") + ": "}
                    </span>
                    {dataModal.position}
                  </p>
                )}
              </div>
              {dataModal.contentLs &&
                dataModal.contentLs.map((val, i) => {
                  return (
                    <div key={i}>
                      <p className="italic font-semibold">{val.head}</p>
                      <ul className="list-disc pl-10 flex flex-col lg:gap-y-3">
                        {val.list.map((val, i) => {
                          return <li key={i}>{val}</li>;
                        })}
                      </ul>
                    </div>
                  );
                })}

              {dataModal.frameWork && (
                <div>
                  <p className="italic font-semibold">Frame work</p>
                  <div className="flex flex-col gap-y-5">
                    {dataModal.frameWork.map((val, i) => {
                      return (
                        <div key={i}>
                          <div className="flex  gap-3 pl-5">
                            <p className="flex-shrink-0">{val.head}: </p>

                            <div className="flex-grow flex flex-wrap gap-3">
                              {val.list.map((val, i) => {
                                return (
                                  <div
                                    key={i}
                                    className="flex flex-col items-center gap-y-2"
                                  >
                                    <img
                                      src={val.icon}
                                      alt=""
                                      className="h-5 md:h-7"
                                    />
                                    <p className="text-xs">{val.text}</p>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
}

export default withTranslation()(Experience);
