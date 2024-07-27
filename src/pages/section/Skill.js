import React from "react";
import { withTranslation } from "react-i18next";
import { HeaderTitle } from "../components/Components";

import imgAngular from "../../assets/logo/logo-angular.png";
import imgAnydesk from "../../assets/logo/logo-anydesk.png";
import imgCss from "../../assets/logo/logo-css.png";
import imgFileZilla from "../../assets/logo/logo-filezilla.png";
import imgGit from "../../assets/logo/logo-git.png";
import imgHtml from "../../assets/logo/logo-html.png";
import imgJs from "../../assets/logo/logo-js.png";
import imgLaravel from "../../assets/logo/logo-laravel.png";
import imgMySql from "../../assets/logo/logo-mysql.png";
import imgMySQLWorkbenc from "../../assets/logo/logo-MySQLWorkbenc.png";
import imgNodejs from "../../assets/logo/logo-nodejs2.png";
import imgPhp from "../../assets/logo/logo-php.png";
import imgPostman from "../../assets/logo/logo-postman.png";
import imgPython from "../../assets/logo/logo-python.png";
import imgPostgre from "../../assets/logo/logo-postgre.png";
import imgReact from "../../assets/logo/logo-react.png";
import imgSql from "../../assets/logo/logo-sql.png";
import imgTailwind from "../../assets/logo/logo-tailwind.png";
import imgTs from "../../assets/logo/logo-ts.png";
import imgVscode from "../../assets/logo/logo-vscode.png";

function Skill({ t }) {
  return (
    <div className="flex flex-col justify-center items-center gap-y-3">
      <HeaderTitle title={t("skill")} />
      <div className="flex flex-col items-center gap-y-7 divide-y-4 divide-custom-700">
        {[
          {
            color: "#5E1675",
            title: "Front End",
            subTitle: [
              { title: "React", logo: imgReact },
              { title: "Angular", logo: imgAngular },
              { title: "Laravel", logo: imgLaravel },
              { title: "Tailwind", logo: imgTailwind },
            ],
          },
          {
            color: "#4C4B16",
            title: "Back End",
            subTitle: [
              { title: "NodeJS", logo: imgNodejs },
              { title: "Laravel", logo: imgLaravel },
            ],
          },
          {
            color: "#001524",
            title: "Database",
            subTitle: [
              { title: "MySQL", logo: imgMySql },
              { title: "PostgreSQL", logo: imgPostgre },
            ],
          },
          {
            color: "#E3651D",
            title: "Coding",
            subTitle: [
              { title: "HTML", logo: imgHtml },
              { title: "CSS", logo: imgCss },
              { title: "JS", logo: imgJs },
              { title: "TS", logo: imgTs },
              { title: "PHP", logo: imgPhp },
              { title: "SQL", logo: imgSql },
              { title: "Python", logo: imgPython },
            ],
          },
          {
            color: "#496989",
            title: "Tools",
            subTitle: [
              { title: "Visual Studio Code", logo: imgVscode },
              { title: "Postman", logo: imgPostman },
              { title: "FileZilla", logo: imgFileZilla },
              { title: "Git", logo: imgGit },
              { title: "MySQLWorkbenc", logo: imgMySQLWorkbenc },
              { title: "Anydesk", logo: imgAnydesk },
            ],
          },
        ].map((val, i) => {
          return (
            <div
              key={i}
              className={`flex flex-col items-center gap-y-3 w-full pt-4`}
              style={{ color: val.color }}
            >
              <p className="text-lg md:text-xl font-bold">{val.title}</p>
              <div className="flex flex-wrap justify-center gap-y-5 gap-x-7">
                {val.subTitle.map((val, i) => {
                  return (
                    <div key={i} className="flex flex-col items-center gap-y-2">
                      <img src={val.logo} alt="" className="h-10 md:h-14" />
                      <p className="text-xs md:text-base font-bold">
                        {val.title}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default withTranslation()(Skill);
