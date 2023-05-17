import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

const palettes = {
  primary: [
    "bg-primary-100",
    "bg-primary-200",
    "bg-primary-300",
    "bg-primary-400",
    "bg-primary-500",
    "bg-primary-600",
    "bg-primary-700",
  ],

  neutral: [
    "bg-neutral-100",
    "bg-neutral-200",
    "bg-neutral-300",
    "bg-neutral-400",
    "bg-neutral-500",
    "bg-neutral-600",
    "bg-neutral-700",
    "bg-neutral-800",
    "bg-neutral-900",
  ],
  outstanding: [
    "bg-outstanding-100",
    "bg-outstanding-200",
    "bg-outstanding-300",
    "bg-outstanding-400",
  ],
};
const Color = ({ paletteName }) => {
  return (
    <div className="flex space-x-1">
      {palettes[paletteName].map((palette, index) => (
        <span
          key={index}
          className={cn("w-10 h-10 flex justify-center ", palette)}
        >
          {100 * (index + 1)}
        </span>
      ))}
    </div>
  );
};
Color.propTypes = {
  paletteName: PropTypes.oneOf(["primary", "neutral", "outstanding"]),
};

Color.defaultProps = {
  paletteName: "primary",
};
export default Color;
