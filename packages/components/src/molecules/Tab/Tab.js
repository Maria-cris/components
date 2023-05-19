import React from "react";
import cn from "classnames";
import Heading from "../../atoms/Heading/Heading";
import polygon from "../../assets/polygon.svg";
import PropTypes from "prop-types";
import Icon from "../../atoms/Icon/Icon";
import SVGIcons from "../../assets/SVGIcons";

const defaultValues = {
  active: false,
  className: "",
  isFirst: false,
  onClick: () => {},
};
const Tab = ({
  label,
  active = defaultValues.active,
  className = defaultValues.className,
  iconName,
  isFirst,
  onClick,
}) => {
  return (
    <div
      className={cn(className, "flex flex-col space-x-0 w-fit")}
      onClick={onClick}
    >
      <div
        className={cn(
          "flex relative  justify-center p-4  items-center whitespace-nowrap ",
          {
            ["bg-neutral-900 text-neutral-100 drop-shadow-md border-b-2 border border-neutral-900"]:
              active,
            ["bg-neutral-100 border-b-2 border-t border-r border-neutral-300  border-b-primary-500"]:
              !active,
            ["border-l border-neutral-300"]: isFirst,
          }
        )}
      >
        {iconName ? (
          <span
            className={cn(
              " flex text-sm font-semibold leading-[125%] whitespace-nowrap items-center justify-center",
              {
                ["space-x-2"]: label,
              }
            )}
          >
            <Icon iconName={iconName} className="flex justify-center text-lg" />
            <Heading
              title={label}
              type="h-6"
              variant="light"
              font="secondary"
              className="text-sm font-semibold leading-[125%]"
            />
          </span>
        ) : (
          <Heading
            title={label}
            type="h-6"
            variant="light"
            font="secondary"
            className="text-sm font-semibold leading-[125%]"
          />
        )}
      </div>
      <div className={cn("flex justify-center h-2", { ["hidden"]: !active })}>
        {/* <img className="h-2 " src={polygon} alt="polygon" /> */}
        <SVGIcons name="polygonTab" className="text-neutral-900" />
      </div>
    </div>
  );
};
Tab.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  iconName: PropTypes.string,
  active: PropTypes.bool,
  isFirst: PropTypes.bool,
  onClick: PropTypes.func,
};
Tab.defaultProps = defaultValues;

export default Tab;
