import React, { useState, useEffect } from "react";
import { withTranslation } from "react-i18next";
import { HeaderTitle } from "../components/Components";

function Education({ t }) {
  const [openIndex, setOpenIndex] = useState(null);
  const [showMessages, setShowMessages] = useState([]);

  useEffect(() => {
    // Initialize showMessages based on the length of items
    const itemsLength = items.length;
    setShowMessages(new Array(itemsLength).fill(true));
  }, []);

  useEffect(() => {
    let timers = [];

    if (openIndex === null) {
      timers.push(
        setTimeout(() => {
          setShowMessages((prev) =>
            prev.map((_, index) => index === openIndex || openIndex === null)
          );
        }, 700)
      );
    } else {
      timers.push(
        setTimeout(() => {
          setShowMessages((prev) =>
            prev.map((_, index) => index !== openIndex)
          );
        }, 700)
      );
    }

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [openIndex]);

  const items = [
    {
      name: t("psu"),
      period: t("2015-2019"),
      content1: [
        { subTitle: t("civilen") },
        { title: t("gpa"), subTitle: "2.61" },
      ],
      content2: [
        { subTitle: t("psu_1") },
        { subTitle: t("psu_2") },
        { subTitle: t("psu_3") },
      ],
    },
    {
      name: t("pw"),
      period: t("2012-2015"),
      content1: [
        { subTitle: t("senior_high_school") },
        { title: t("gpa"), subTitle: "3.76" },
      ],
      content2: [
        { subTitle: t("pw_1") },
        { subTitle: t("pw_2") },
        { subTitle: t("pw_3") },
      ],
    },
    {
      name: t("usw"),
      period: t("2009-2012"),
      content1: [
        { subTitle: t("junior_high_school") },
        { title: t("gpa"), subTitle: "3.70" },
      ],
      content2: [{ subTitle: t("usw_1") }],
    },
    {
      name: t("buke_school"),
      period: t("2006-2009"),
      content1: [
        { subTitle: t("intermediate_school") },
        { title: t("gpa"), subTitle: "3.70" },
      ],
      content2: [{ subTitle: t("buke_1") }],
    },
  ];

  return (
    <div className="flex justify-center">
      <div className="container flex flex-col justify-center items-start">
        <HeaderTitle title={t("education")} />

        <div className="mt-5 flex flex-col lg:flex-row gap-x-5 gap-y-5 w-full">
          <div className="flex-shrink-0 border-l-8 border-custom-900 min-h-[300px] flex flex-col gap-y-5">
            {items.map((val, i) => (
              <div
                key={i}
                className="pl-[20px] relative w-full lg:w-fit cursor-pointer"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <div className="h-5 w-5 bg-custom-900 border-4 border-custom-300 rounded-full absolute top-[-1px] left-[-13px] lg:left-[-15px]"></div>
                <div
                  className={`border-2 border-custom-500 rounded-xl p-2 w-full lg:w-[500px] ${
                    openIndex == i ? "bg-custom-200" : ""
                  }`}
                >
                  <div>
                    <p className="font-bold">{val.period}</p>
                    <p className="italic">{val.name}</p>
                    {val.content1.map((val, i) => {
                      return (
                        <p key={i}>
                          {val.title && val.title + ": "}
                          {val.subTitle}
                        </p>
                      );
                    })}
                    {((openIndex == null
                      ? showMessages[i]
                      : showMessages[i] && openIndex !== i) ||
                      true) && (
                      <p className="text-xs italic mt-2 text-end">
                        {t("click_for_moreinformation")}
                      </p>
                    )}
                  </div>
                  {/* <div
                  className={`w-full overflow-hidden transition-all duration-700 ${
                    openIndex === i
                      ? "max-h-[1000px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {val.content2}
                </div> */}
                </div>
              </div>
            ))}
          </div>
          <div className="flex-grow flex items-start justify-start">
            {openIndex !== null && (
              <div className="flex flex-col lg:gap-y-3">
                <p className="text-xl lg:text-2xl font-bold">
                  {items[openIndex].name}{" "}
                </p>
                <p className="font-bold italic">{items[openIndex].period} </p>
                {items[openIndex].content1.map((val, i) => {
                  return (
                    <p key={i}>
                      {val.title && val.title + ": "}
                      {val.subTitle}
                    </p>
                  );
                })}

                <p className="mt-3 text-lg lg:text-xl font-bold">
                  {t("performance")}
                </p>
                <ul className="list-disc pl-10 flex flex-col lg:gap-y-3">
                  {items[openIndex].content2.map((val, i) => {
                    return (
                      <li key={i}>
                        {val.title && val.title + ": "}
                        {val.subTitle}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default withTranslation()(Education);
