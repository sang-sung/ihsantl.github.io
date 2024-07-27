import React from "react";
import { withTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { HeaderTitle } from "../components/Components";

function Contact({ t }) {
  return (
    <div className="flex flex-col justify-center items-center gap-y-5">
      <HeaderTitle title={t("contact")} />
      {[
        {
          title: t("telephone"),
          subTitle: "082-2682418",
          icon: faPhoneVolume,
          href: "tel:082-2682418",
        },
        {
          title: t("email"),
          subTitle: "sung_tl@hotmail.com",
          icon: faEnvelope,
          href: "mailto:sung_tl@hotmail.com",
        },
      ].map((val, i) => {
        return (
          <div className="flex flex-col items-center gap-2 py-1">
            <p className="font-bold text-xl">
              <FontAwesomeIcon icon={val.icon} /> {val.title}
            </p>
            <a href={val.href} className="text-blue-500 hover:font-bold">
              {val.subTitle}
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default withTranslation()(Contact);
