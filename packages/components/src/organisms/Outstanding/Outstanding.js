import React from "react";
import Aspect from "../../atoms/Aspect/Aspect";
import Heading from "../../atoms/Heading/Heading";
import PropTypes from "prop-types";
import cn from "classnames";

const position = {
  ["right"]: "flex-col-reverse md:flex-row-reverse md:pt-6  pt-4",
  ["left"]: "flex-col-reverse md:flex-row md:pt-6  pt-4",
};
const paddings = {
  ["right"]: "md:pl-8 md:pr-0 px-0",
  ["left"]: "md:pr-8 md:pl-0 px-0",
};
const paddingContent = {
  ["right"]: "md:pr-8 md:pl-0 px-4 ",
  ["left"]: "md:pl-8 md:pr-0 px-4 ",
};
const defaultValues = {
  imgPosition: "right",
  backgroundColor: "color1",
};
const colors = {
  color1: "bg-rainbow-100",
  color2: "bg-rainbow-200",
  color3: "bg-rainbow-300",
  color4: "bg-rainbow-400",
  color5: "bg-neutral-500",
  color6: "bg-neutral-800",
  color7: "bg-neutral-900",
};

const Outstanding = ({
  imageUrl,
  title,
  paragraph,
  imgPosition = defaultValues.imgPosition,
  backgroundColor = defaultValues.backgroundColor,
}) => {
  return (
    <div
      className={cn("flex  md:px-6", {
        [position[imgPosition]]: true,
        [colors[backgroundColor]]: true,
      })}
    >
      <div className="md:w-1/2 w-full">
        <Aspect ratio="2/1">
          <img
            src={imageUrl}
            className={cn("w-full h-full object-cover object-center", {
              [paddings[imgPosition]]: true,
            })}
          />
        </Aspect>
      </div>
      <div
        className={cn("flex flex-col text-neutral-100 md:w-1/2 w-full", {
          [paddingContent[imgPosition]]: true,
        })}
      >
        <Heading title={title} type="h-5" font="secondary" className="pb-4" />
        <div className="text-neutral-100 font-secondary align-center md:pb-6 pb-4 md:text-base text-sm">
          {paragraph}
        </div>
      </div>
    </div>
  );
};
Outstanding.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  paragraph: PropTypes.string,
  imgPosition: PropTypes.oneOf(["right", "left"]),
  backgroundColor: PropTypes.oneOf([
    "color1",
    "color2",
    "color3",
    "color4",
    "color5",
    "color6",
    "color7",
  ]),
};
Outstanding.defaultProps = defaultValues;
export default Outstanding;
