import React from "react";
import cn from "classnames";
import Heading from "../../atoms/Heading/Heading";
import polygon from "../../assets/polygon.svg";
import PropTypes from "prop-types";
import Icon from "../../atoms/Icon/Icon";

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
              " flex text-sm font-semibold leading-[125%] whitespace-nowrap",
              {
                ["space-x-2"]: label,
              }
            )}
          >
            <Icon iconName={iconName} />
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
      <div className={cn("flex justify-center", { ["hidden"]: !active })}>
        <img className="h-2 " src={polygon} alt="polygon" />
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
