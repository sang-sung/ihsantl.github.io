import React from "react";
import { withTranslation } from "react-i18next";

function Experience({ t }) {
  return (
    <div className="min-h-screen">
      <p className="text-2xl uppercase font-bold ">{t("experience")}</p>
      <div className="">
        {[
          // { title: t("name"), subTitle: t("ihsan taleh") },
          { title: t("birth_day"), subTitle: t("birth_day_d") },
          { title: t("age"), subTitle: t("age_d") },
          { title: t("religion"), subTitle: t("islam") },
          { title: t("nationality"), subTitle: t("thai") },
          { title: t("gender"), subTitle: t("man") },
          { title: t("hobby"), subTitle: t("hobby_d") },
          { title: t("home_town"), subTitle: t("yala") },
        ].map((val, i) => {
          return (
            <div key={i} className="flex gap-2 py-1">
              <p className="font-bold">{val.title} :</p>
              <p className="">{val.subTitle}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default withTranslation()(Experience);
