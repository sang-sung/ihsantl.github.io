import React, { useEffect, useState } from "react";
import { withTranslation } from "react-i18next";
import ChangeLang from "./ChangeLang";

const Head = ({ t }) => {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.history.replaceState(null, null, `#${entry.target.id}`);
            setCurrentHash(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.7 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <div className="hidden fixed z-50 w-full bg-custom-400 lg:flex justify-center py-5 shadow-xl">
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
                  className={`capitalize hover:font-bold duration-200 ${
                    currentHash === "#" + val.name
                      ? "font-bold text-custom-900"
                      : ""
                  }`}
                >
                  {t(val.name)}
                </a>
              );
            })}
          </div>
        </div>
        <ChangeLang />
      </div>
      <div className="lg:hidden fixed z-50 top-0 right-0">
        <ChangeLang />
      </div>
    </>
  );
};

export default withTranslation()(Head);
