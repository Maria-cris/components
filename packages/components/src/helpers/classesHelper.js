import classnames from "classnames";

/* Classes*/

export const getClassBannerImage = (overlay) => {
  const classesBannerImg = classnames("w-full h-full", {
    ["opacity-50"]: overlay === "light",
    ["brightness-50"]: overlay === "dark",
  });
  return classesBannerImg;
};
export const getClassBannerContainer = (potition) => {
  const classesBannerImg = classnames(
    "absolute top-0 p-10 left-0 w-full h-full hidden md:flex ",
    {
      ["justify-center items-start text-center"]: potition === "center-top",
      ["justify-center items-center text-center"]: potition === "center-middle",
      ["justify-center items-end text-center"]: potition === "center-bottom",
      ["justify-start items-start text-left"]: potition === "left-top",
      ["justify-start items-center text-left"]: potition === "left-middle",
      ["justify-start items-end text-left"]: potition === "left-bottom",
      ["justify-end items-start text-right"]: potition === "right-top",
      ["justify-end items-center text-right"]: potition === "right-middle",
      ["justify-end items-end text-right"]: potition === "right-bottom",
    }
  );
  return classesBannerImg;
};

export const getClassBannerPositionButton = (potition) => {
  const classesBannerImg = classnames("flex", {
    ["justify-center items-start text-center"]: potition === "center-top",
    ["justify-center items-center text-center"]: potition === "center-middle",
    ["justify-center items-end text-center"]: potition === "center-bottom",
    ["justify-start items-start text-left"]: potition === "left-top",
    ["justify-start items-center text-left"]: potition === "left-middle",
    ["justify-start items-end text-left"]: potition === "left-bottom",
    ["justify-end items-start text-right"]: potition === "right-top",
    ["justify-end items-center text-right"]: potition === "right-middle",
    ["justify-end items-end text-right"]: potition === "right-bottom",
  });
  return classesBannerImg;
};
