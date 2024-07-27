import React from "react";
import { withTranslation } from "react-i18next";
import imgProfile from "../../assets/profile.jpg";
import { useCurrentLang } from "../../services/function";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

function Information({ t }) {
  const currentLang = useCurrentLang();

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };

  return (
    <div className="bg-custom-300 flex flex-col lg:flex-row pb-10 lg:pb-0 lg:pt-[85px]">
      <div className="flex-shrink-0">
        <img
          src={imgProfile}
          alt=""
          className="w-full lg:w-auto lg:h-[calc(100svh-85px)] object-contain"
        />
      </div>
      <div className="text-white flex-grow flex flex-col justify-center items-center gap-y-5 mt-10 lg:mt-0">
        <div className="w-10/12 lg:w-6/12 flex justify-start">
          <p className="text-[30px] italic">Hello! It's me</p>
        </div>
        <div className="border-y-4 border-custom-600 w-10/12 lg:w-6/12 flex justify-center">
          <div
            className={`uppercase font-bold italic ${
              currentLang == "en"
                ? "tracking-[0.5rem] md:tracking-[2rem]"
                : "tracking-[0.1rem] md:tracking-[0.5rem]"
            }`}
          >
            <p className="text-[40px] md:text-[80px]">{t("ihsan")}</p>
            <p className="text-[40px] md:text-[80px] pl-20">{t("taleh")}</p>
          </div>
        </div>
        <div className="">
          <p className="text-[18px] md:text-[30px] italic text-center">
            Back-End Developer / Full-Stack Developer
          </p>
        </div>
      </div>

      {/* <div className="w-screen">
        <div className="slider-section-one md:mx-0 bg-gray-100 pt-5 pb-8 mt-2 rounded-md officer-slide">
          <Slider {...settings}>
            <div>
              <h3 className="bg-green-500">1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
        </div>
      </div> */}
    </div>
  );
}

export default withTranslation()(Information);
