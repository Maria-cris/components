import cn from "classnames";

/* Classes*/

export const getClassBannerImage = (overlay) => {
  const classesBannerImg = cn("w-full h-full", {
    ["opacity-50"]: overlay === "light",
  });
  return classesBannerImg;
};
export const getPositionContainerText = (potition) => {
  const commonClasses = cn(
    "absolute p-10",
    "top-0  left-0",
    "w-full h-full",
    "hidden md:flex "
  );
  const positions = {
    "center-top": "justify-center items-start text-center",
    "center-middle": "justify-center items-center text-center",
    "center-bottom": "justify-center items-end text-center",
    "left-top": "justify-start items-start text-left",
    "left-middle": "justify-start items-center text-left",
    "left-bottom": "justify-start items-end text-left",
    "right-top": "justify-end items-start text-right",
    "right-middle": "justify-end items-center text-right",
    "right-bottom": "justify-end items-end text-right",
  };

  const classesBannerImg = cn(commonClasses, {
    [[positions[potition]]]: true,
  });
  return classesBannerImg;
};

export const getClassBannerPositionButton = (potition) => {
  const classesBannerImg = cn("flex", {
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
