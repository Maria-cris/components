import { useState } from "react";
import Icon from "../../atoms/Icon/Icon";
import Heading from "../../atoms/Heading/Heading";
import cn from "classnames";
import PropTypes from "prop-types";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const defaultValues = {
  className: "",
  theme: "dark",
  number: 0,
};
const variants = {
  shadow: "border rounded-lg shadow-lb p-4",
  stroke: "border rounded-lg p-4",
};
const themes = {
  dark: "text-neutral-800",
  light: "text-neutral-100",
};
const colors = {
  "neutral-100": "border-neutral-100 shadow-neutral-100",
  "neutral-200": "border-neutral-200 shadow-neutral-200",
  "neutral-300": "border-neutral-300 shadow-neutral-300",
  "neutral-400": "border-neutral-400 shadow-neutral-400",
  "neutral-500": "border-neutral-500 shadow-neutral-500",
  "neutral-600": "border-neutral-600 shadow-neutral-600",
  "neutral-700": "border-neutral-700 shadow-neutral-700",
  "neutral-800": "border-neutral-800 shadow-neutral-800",
  "neutral-900": "border-neutral-900 shadow-neutral-900",
  "primary-100": "border-primary-100 shadow-primary-100",
  "primary-200": "border-primary-200 shadow-primary-200",
  "primary-300": "border-primary-300 shadow-primary-300",
  "primary-400": "border-primary-400 shadow-primary-400",
  "primary-500": "border-primary-500 shadow-primary-500",
  "primary-600": "border-primary-600 shadow-primary-600",
  "primary-700": "border-primary-700 shadow-primary-700",
  "primary-800": "border-primary-800 shadow-primary-800",
  "primary-900": "border-primary-900 shadow-primary-900",
};
const Numbers = ({
  number = defaultValues.number,
  title,
  iconName,
  description,
  variant,
  color,
  className = defaultValues.className,
  theme = defaultValues.theme,
}) => {
  const [finishedCount, setFinishedCount] = useState(false);
  return (
    <div
      id="Numbers-Container"
      className={cn(className, "flex flex-col bg-transparent ", {
        [variants?.[variant]]: variant,
        [themes?.[theme]]: theme,
        [colors?.[color]]: color,
      })}
    >
      <div
        id="Number-Icon"
        className="flex align-center items-center space-x-1 pb-2"
      >
        {iconName ? (
          <span className="text-2xl lg:text-5xl md:text-3xl">
            <Icon iconName={iconName} type="outlined" />
          </span>
        ) : (
          ""
        )}
        <CountUp
          separator=","
          start={0}
          end={number}
          onEnd={() => setFinishedCount(true)}
        >
          {({ countUpRef, start }) => (
            <VisibilitySensor
              onChange={(isVisible) => {
                if (!isVisible || finishedCount) return;
                start();
              }}
              delayedCall
            >
              <span
                className="font-secondary text-2xl lg:text-5xl md:text-3xl font-bold leading-[125%] "
                ref={countUpRef}
              />
            </VisibilitySensor>
          )}
        </CountUp>
      </div>
      <div id="Numbers-title" className="pb-2">
        <Heading title={title} type="h-6" font="secondary" />
      </div>
      <div id="Numbers-description">
        <span className="text-sm font-secondary">{description}</span>
      </div>
    </div>
  );
};
Numbers.propTypes = {
  number: PropTypes.number,
  iconName: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  variant: PropTypes.oneOf(["shadow", "stroke", ""]),
  theme: PropTypes.oneOf(["light", "dark"]),
  color: PropTypes.oneOf([
    "neutral-100",
    "neutral-200",
    "neutral-300",
    "neutral-400",
    "neutral-500",
    "neutral-600",
    "neutral-700",
    "neutral-800",
    "neutral-900",
    "primary-100",
    "primary-200",
    "primary-300",
    "primary-400",
    "primary-500",
    "primary-600",
    "primary-700",
    "primary-800",
    "primary-900",
  ]),
  className: PropTypes.string,
};
Numbers.defaultProps = defaultValues;
export default Numbers;
