import React from "react";
import { withTranslation } from "react-i18next";
import { HeaderTitle } from "../components/Components";

function Personal({ t }) {
  return (
    <div className="flex flex-col items-center gap-y-5">
      <HeaderTitle title={t("personal")} />
      <div className="flex flex-col gap-y-3">
        {[
          { title: t("address"), subTitle: t("address_d") },
          { title: t("birth_day"), subTitle: t("birth_day_d") },
          { title: t("age"), subTitle: t("age_d") },
          { title: t("religion"), subTitle: t("islam") },
          { title: t("nationality"), subTitle: t("thai") },
          { title: t("gender"), subTitle: t("man") },
          { title: t("hobby"), subTitle: t("hobby_d") },
          { title: t("home_town"), subTitle: t("yala") },
        ].map((val, i) => {
          return (
            <div key={i} className="flex justify-center gap-2 py-1">
              <p className="text-center">
                <span className="font-bold">{val.title} : </span>
                {val.subTitle}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default withTranslation()(Personal);
