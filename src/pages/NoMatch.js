import React from "react";
import { withTranslation } from "react-i18next";

function NoMatch({ t }) {
  const searchParams = window.location.search.substring(1);

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen text-4xl font-semibold text-center uppercase text-custom">
      <h1>
        {t("apologize")} {t("page_not_found")}
      </h1>
      <a
        href={"/?" + searchParams}
        className="px-5 py-2 mt-5 text-lg text-white rounded-md bg-custom hover:bg-custom-100">
        {t("back_home")}
      </a>
    </div>
  );
}

export default withTranslation()(NoMatch);